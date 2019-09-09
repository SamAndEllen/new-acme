<template>
  <v-row class="fill-height">
    <v-col cols="12" class="pt-0">
      <ctr-class-day-list class="ma-3" :days="days" />
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import CtrClassDayList from '@/components/CtrClassDayList';

export default {
  name: 'Class',
  components: {
    CtrClassDayList
  },
  data: () => ({
    days: []
  }),
  methods: {
    ...mapActions({
      setRequireBackNav: 'setRequireBackNav'
    })
  },
  async created () {
    const id = this.$route.query.id;
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
</style>