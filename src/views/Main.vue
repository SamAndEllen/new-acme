<template>
  <div>
    <ctr-class-card v-for="(item, idx) in classes" class="ma-3" :item="item" :key="idx" />
  </div>
</template>

<script>
import axios from 'axios';
import CtrClassCard from '@/components/CtrClassCard';

export default {
  name: 'Main',
  components: {
    CtrClassCard
  },
  data: () => ({
    classes: [
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
  async created () {
    await axios
      .get(`${process.env.VUE_APP_API_URL}/courses?page=0`)
      .then(res => {
        const course = res.data._embedded.course;
        const classArr = [];
        this.classes.map((data, idx) => {
            classArr.push({
                ...data,
                ...course[idx],
            })
        });
        this.classes = classArr;
      })
      .catch(err => console.log(err))
  }
};
</script>

<style>
  .hand__cusor {
    cursor: pointer;
  }
</style>