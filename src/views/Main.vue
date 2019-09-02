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

import { mapActions } from 'vuex';

export default {
  name: 'Main',
  components: {
    CtrClassCard
  },
  data: () => ({
    courses: [
        {
            image: "https://thenypost.files.wordpress.com/2019/03/tales-from-the-trenches.jpg?quality=90&strip=all&w=1236&h=820&crop=1"
        },
        {
            image: "https://echo360.com/wp-content/uploads/2018/08/iStock_73362333_XXXLARGE.jpg"
        },
        {
            image: "https://www.thoughtco.com/thmb/BovxmeLvYa1CJDMuCT-mhXUdIto=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/149629618-56a18eeb3df78cf7726c00d7.jpg"
        },
        {
            image: "https://ak4.picdn.net/shutterstock/videos/1835644/thumb/1.jpg"
        },
        {
            image: "http://www.cfodailynews.com/wp-content/uploads/2018/12/meeting-2-685x457.jpg"
        }
    ],
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
        this.courses.map((data, idx) => {
            coursesArr.push({
                ...data,
                ...course[idx],
            })
        });
        this.courses = coursesArr;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
  .hand__cusor {
    cursor: pointer;
  }
</style>