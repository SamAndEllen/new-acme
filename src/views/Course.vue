<template>
  <v-row class="fill-height">
    <v-col cols="12" md="5" class="pt-0 pr-8">
      <ctr-course-detail :course="course" />
    </v-col>
    <v-col cols="12" md="7" class="pt-0 border__left">
      <div class="ma-4">
        <p class="title mb-1 font-weight-black">
          Course List
        </p>
        <ctr-course-list :course="course" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import CtrCourseDetail from '@/components/CtrCourseDetail';
import CtrCourseList from '@/components/CtrCourseList';
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Course',
  components: {
    CtrCourseDetail,
    CtrCourseList
  },
  data: () => ({
    course: null,
  }),
  async created () {
    this.course = this.$route.params.course;
    // this.setRequireBackNav(true)
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
</style>