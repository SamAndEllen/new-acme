<template>
  <div>
    <v-row>
      <v-col cols="12" md="5" class="pt-0">
        <ctr-class-detail v-if="classes" :classes="classes" class="mb-3" />
      </v-col>
      <v-col cols="12" md="7" class="pt-0 border__left">
        <div class="ma-4">
          <p class="title mb-1 font-weight-black">
            Class Day List
          </p>
          <ctr-class-day-list :days="days" />
        </div>
      </v-col>
    </v-row>
    <v-footer fixed color="white">
      <v-btn color="primary" dark block>
        Open Usage
      </v-btn>
    </v-footer>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import CtrClassDetail from '@/components/CtrClassDetail';
import CtrClassDayList from '@/components/CtrClassDayList';

export default {
  name: 'Class',
  components: {
    CtrClassDetail,
    CtrClassDayList
  },
  data: () => ({
    days: [],
    classes: null
  }),
  methods: {
    ...mapActions({
      setRequireBackNav: 'setRequireBackNav'
    })
  },
  async created () {
    this.classes = this.$route.params.classes;
    const id = this.$route.query.id;
    if (!this.classes) {
      await axios
      .get(`${process.env.VUE_APP_API_URL}/clazzs/${id}`)
      .then(res => {
        const classId = _.last(_.split(res.data._links.clazz.href, '/'), 1);
        this.classes = {
          name: `class${classId}`,
          rate: res.data.evaluationRate,
          ...res.data
        };
      })
      .catch(err => console.log(err));
    }
    await axios
      .get(`${process.env.VUE_APP_API_URL}/clazzs/${id}/classDayList`)
      .then(res => {
        this.days = res.data._embedded.classday;
      })
      .catch(err => console.log(err));
    this.setRequireBackNav(true);
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
</style>