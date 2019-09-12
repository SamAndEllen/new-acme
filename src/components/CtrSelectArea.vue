<template>
  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ on }">
      <v-btn color="primary mb-2" block dark @click="openSheet">
        Open Usage
      </v-btn>
    </template>
    <v-sheet class="text-center input__box">
      <div>
        <v-select
          v-model="select.day"
          :items="days"
          item-text="name"
          item-value="id"
          solo
          label="Select Class Day"
        />
        <v-select
          v-model="select.venu"
          :items="venus"
          item-text="name"
          item-value="id"
          solo
          label="Select Venu"
        />
        <v-select
          v-model="select.instructor"
          :items="instructors"
          item-text="name"
          item-value="id"
          solo
          label="Select Instructor"
        />
        <v-btn color="primary mb-2" block dark @click="onSubmit()">
          배정하기
        </v-btn>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CtrSelectArea',
  props: {
    days: {
      type: Array
    },
  },
  data: () => ({
    sheet: false,
    select: {
      day: null,
      venu: null,
      instructor: null
    },
    venus: null,
    instructors: null,
  }),
  methods: {
    async openSheet() {
      if (!this.venus) {
        await axios
        .get(`${process.env.VUE_APP_API_URL}/venus`)
        .then(res => {
          this.venus = res.data._embedded.venu.map(res => {
            return {
              id: _.last(_.split(res._links.venu.href, '/'), 1),
              ...res
            }
          });
        })
        .catch(err => console.log(err));
      }
      if (!this.instructors) {
        await axios
        .get(`${process.env.VUE_APP_API_URL}/instructors`)
        .then(res => {
          this.instructors = res.data._embedded.instructor.map(res => {
            return {
              id: _.last(_.split(res._links.instructor.href, '/'), 1),
              name: res.lastName.concat(res.firstName),
              ...res
            }
          });
        })
        .catch(err => console.log(err));
      }
      this.sheet = true;
    },
    async onSubmit() {
      const classDayId = Number(this.select.day);
      const venuId = Number(this.select.venu);
      const instructorId = Number(this.select.instructor);
      await axios
      .post(`${process.env.VUE_APP_API_URL}/schedule-service/associate-venu`, {
        classDayId,
        venuId
      })
      .then(async () => {
        await axios
        .post(`${process.env.VUE_APP_API_URL}/schedule-service/associate-instructor`, {
          classDayId,
          instructorId
        })
        .then(() => {
          alert("배정 완료");
          this.sheet = false;
        })
        .catch(error => {
          alert("강사 선택 오류");
          console.log(error);
        });
      })
      .catch(error => {
        alert("강의장 선택 오류");
        console.log(error);
      });
    }
  }
}
</script>

<style>
  .input__box {
    border-radius: 0;
    padding: 1rem;
    padding-right: 1.65rem;
  }
  .v-text-field__details {
    display: none;
  }
</style>