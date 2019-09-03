<template>
  <div>
    <ctr-course-detail :course="course" />
    <ctr-course-list :course="course" />
  </div>
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
</style>