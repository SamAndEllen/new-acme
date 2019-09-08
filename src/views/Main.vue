<template>
  <div>
    <ctr-class-card class="ma-3"
      v-for="(item, idx) in courses"
      :item="item" 
      :key="idx"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CtrClassCard from '@/components/CtrClassCard';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Main',
  components: {
    CtrClassCard
  },
  computed: {
    ...mapGetters({
      courseImages: 'courseImages',
    })
  },
  data: () => ({
    courses: [],
  }),
  methods: {
    ...mapActions({
      setRequireBackNav: 'setRequireBackNav'
    })
  },
  async created () {
    await axios
      .get(`${process.env.VUE_APP_API_URL}/courses?page=0`)
      .then(res => {
        const course = res.data._embedded.course;
        const coursesArr = [];
        this.courseImages.map((data, idx) => {
            coursesArr.push({
              ...data,
              ...course[idx],
            })
        });
        this.courses = coursesArr;
      })
      .catch(err => console.log(err));
    this.setRequireBackNav(false);
  }
};
</script>

<style>
  .hand__cusor {
    cursor: pointer;
  }
</style>