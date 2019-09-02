<template>
  <v-row>
    <v-col cols="12" md="5" class="pt-0 pr-0">
      <v-img height="200" :src="course.image" />
    </v-col>
    <v-col cols="12" md="7" class="pt-0">
      <v-card flat>
        <v-card-title>
          {{ course.title }}
        </v-card-title>
        <v-card-text>
          <p>{{ course.description }}</p>
          <span class="black--text headline font-weight-black">
            {{ AddComma(course.unitPrice) }}
          </span>
          <span class="subtitle-1">원</span>
        </v-card-text>
      </v-card>
      <v-divider class="mx-4"></v-divider>
        <v-card max-width="280" flat>
          <v-list disabled dense>
            <v-list-item-group>
              <v-list-item
                v-for="(item, key, i) in detail"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black" v-text="key"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      <v-divider class="mx-4"></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Course',
  components: {
  },
  data: () => ({
    classes: [
    ],
    course: null,
    detail: null,
  }),
  async created () {
    this.course = this.$route.params.course;
    this.detail = {
      duration: `${this.course.duration}h`,
      minimum: this.course.minEnrollment, 
      maximum: this.course.maxEnrollment
    };
    this.setRequireBackNav(true)
  },
  methods: {
    ...mapActions({
      setRequireBackNav: 'setRequireBackNav'
    }),
    AddComma (price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>

<style>
  .hand__cusor {
    cursor: pointer;
  }
</style>