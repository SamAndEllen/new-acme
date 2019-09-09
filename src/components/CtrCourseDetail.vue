<template>
  <v-row>
    <v-col cols="12" md="12" class="pt-0 pr-0">
      <v-img height="200" :src="course.image" />
    </v-col>
    <v-col cols="12" md="12" class="pt-0">
      <v-card flat>
        <v-card-title class="font-weight-black">
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
      <v-card flat>
        <v-list disabled dense>
          <v-list-item-group>
            <v-list-item
              v-for="(item, key, i) in detail"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span class="mr-4 font-weight-bold">{{ key }}</span>
                  <span style="color: gray;">{{ item }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CtrCourseDetail',
  components: {
  },
  props: {
    course: {
      type: Object
    }
  },
  data: () => ({
    detail: null,
  }),
  mounted () {
    this.detail = {
      '수강 시간': `${this.course.duration}h`,
      '최소 인원': this.course.minEnrollment, 
      '최대 인원': this.course.maxEnrollment
    };
  },
  methods: {
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