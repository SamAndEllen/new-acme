<template>
  <v-list>
    <v-divider></v-divider>
    <template v-for="(item, index) in days">
      <v-list-item :key="item.number">
        <template>
          <v-list-item-content>
            <v-row>
              <v-col cols="4" class="primary--text headline font-weight-black">{{ item.name }}</v-col>
              <v-col cols="8" class="black--text title font-weight-black">
                <span class="black--text title font-weight-black">
                  {{ AddComma(item.instructorPay) }}
                </span>
                <span class="subtitle-1">원</span>
              </v-col>
              <v-col cols="12">{{ getDate(item.date, 'day') }}</v-col>
              <v-col cols="12">{{ getDate(item.startTime, 'time') }} ~ {{ getDate(item.endTime, 'time') }}</v-col>
            </v-row>
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'CtrClassCard',
  props: {
    days: {
      type: Array
    },
  },
  data: () => ({
  }),
  methods: {
    getDate (day, type) {
      if (type === 'day') return this.$moment(day).format('YYYY-MM-DD');
      else return this.$moment(day).format('H:mm:ss');
    },
    AddComma (price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>
