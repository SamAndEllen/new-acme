<template>
  <v-row class="fill-height">
    <v-col cols="12" md="5" class="pt-0 course__padding">
      <ctr-course-detail v-if="course" :course="course" />
    </v-col>
    <v-col cols="12" md="7" class="pt-0 border__left">
      <div class="ma-4">
        <p class="title mb-1 font-weight-black">
          Class List
        </p>
        <ctr-class-list :classes="classes" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import CtrCourseDetail from '@/components/CtrCourseDetail';
import CtrClassList from '@/components/CtrClassList';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Course',
  components: {
    CtrCourseDetail,
    CtrClassList
  },
  computed: {
    ...mapGetters({
      courseImages: 'courseImages',
    })
  },
  data: () => ({
    course: null,
    classes: [],
  }),
  async created () {
    this.course = this.$route.params.course;
    if (!this.course) {
      const id = this.$route.query.id;
      await axios
      .get(`${process.env.VUE_APP_API_URL}/courses/${id}`)
      .then(res => {
        const data = res.data;
        const image = this.courseImages[id-1].image;
        this.course = {
          ...data,
          image
        };
      })
      .catch(err => console.log(err));
    }
    await axios
      .get(this.course._links.clazzList.href)
      .then(res => {
        res.data._embedded.clazz.forEach(item => {
          const id = _.last(_.split(item._links.clazz.href, '/'), 1);
          this.classes.push({
            id,
            name: `class${id}`,
            rate: item.evaluationRate,
            status: item.status
          })
        });
      })
      .catch(err => console.log(err));
    this.setRequireBackNav(true);
  },
  methods: {
    ...mapActions({
      setRequireBackNav: 'setRequireBackNav'
    }),
  }
};
</script>

<style>
  .hand__cusor {
    cursor: pointer;
  }
  .border__left {
    border-left: #E0E0E0 1px solid;
  }
  .course__padding {
    padding-right: 32px !important;
  }
  @media (max-width: 960px) {
    .course__padding {
      padding-right: 0px !important;
    }
  }
</style>