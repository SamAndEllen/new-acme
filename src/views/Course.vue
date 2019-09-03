<template>
  <div>
    <ctr-course-detail :course="course" />
    <v-list>
      <v-subheader>General</v-subheader>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>

                <v-icon
                  v-else
                  color="yellow"
                >
                  star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';
import CtrCourseDetail from '@/components/CtrCourseDetail';
import { mapActions } from 'vuex';

export default {
  name: 'Course',
  components: {
    CtrCourseDetail
  },
  data: () => ({
    course: null,
    items: [
      { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
      { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
    ]
  }),
  async created () {
    this.course = this.$route.params.course;
    this.setRequireBackNav(true)
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