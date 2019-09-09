<template>
  <v-list>
    <v-list-item-group>
      <v-divider></v-divider>
      <template v-for="(item, index) in days">
        <v-list-item :key="item.number">
          <template>
            <v-list-item-content>
              <v-row>
                <v-col cols="2" class="cols__padding primary--text headline font-weight-black">{{ item.number }}Days</v-col>
                <v-col cols="10" class="cols__padding black--text title font-weight-black">
                  <span class="black--text title font-weight-black">
                    {{ AddComma(item.instructorPay) }}
                  </span>
                  <span class="subtitle-1">원</span>
                </v-col>
                <v-col cols="12" class="cols__padding">{{ getDate(item.date, 'day') }}</v-col>
                <v-col cols="12" class="cols__padding">{{ getDate(item.startTime, 'time') }} ~ {{ getDate(item.endTime, 'time') }}</v-col>
              </v-row>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-list-item-group>
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

<style scope>
.cols__padding {
  padding: 5px 5px 5px 12px;
}
</style>