<template>
  <v-list>
      <v-divider></v-divider>
      <template v-for="(item, index) in days">
        <v-list-item :key="item.number">
          <template>
            <v-list-item-content>
              <v-row>
                <v-col
                  cols="5"
                  class="cols__padding primary--text headline font-weight-black"
                >{{ item.number }}Days</v-col>
                <v-col cols="6" class="cols__padding black--text title font-weight-black">
                  <span
                    class="black--text title font-weight-black"
                  >{{ AddComma(item.instructorPay) }}</span>
                  <span class="subtitle-1">원</span>
                </v-col>
                <v-col cols="5" class="cols__padding">{{ getDate(item.date, 'day') }}</v-col>
                <v-col
                  cols="6"
                  class="cols__padding"
                >{{ getDate(item.startTime, 'time') }} ~ {{ getDate(item.endTime, 'time') }}</v-col>
              </v-row>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </template>
      <v-footer absolute color="white">
        <ctr-bottom-sheet ref="sheet" />
        <!-- <v-btn block color="primary" class="mb-3">Hello</v-btn> -->
      </v-footer>
      
  </v-list>
  <!-- <div>
    <v-card v-for="(item, index) in days" class="mb-3">
      <v-card-text>
        <span class="display-1 text--primary">
          {{ item.number }}Days
        </span>
        (<span class="black--text title font-weight-black">{{ AddComma(item.instructorPay) }}</span>
        <span class="subtitle-1">원</span>)
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>-->
</template>

<script>
import _ from "lodash";
import CtrBottomSheet from "@/components/CtrBottomSheet";
import CtrMenu from "@/components/CtrMenu";
export default {
  name: "CtrClassCard",
  components: {
    CtrBottomSheet, CtrMenu
  },
  props: {
    days: {
      type: Array
    }
  },
  data: () => ({
    sheet: false
  }),
  methods: {
    getDate(day, type) {
      if (type === "day") return this.$moment(day).format("YYYY-MM-DD");
      else return this.$moment(day).format("H:mm:ss");
    },
    AddComma(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    openSheet(item) {
      this.$refs.sheet.onOffSheet(item);
    }
  }
};
</script>

<style scope>
.cols__padding {
  padding: 5px 5px 5px 12px;
}

#footer {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>