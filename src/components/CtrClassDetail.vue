<template>
  <div>
    <v-list-item>
        <template>
          <v-list-item-content>
            <p class="title mb-1 font-weight-black">
              {{ classes.name }}
            </p>
            <v-list-item-title>
              <v-rating
                v-model="classes.rate"
                color="yellow darken-3"
                background-color="grey lighten-2"
                empty-icon="$vuetify.icons.ratingFull"
                half-increments
                v-if="classes.rate > 0"
                readonly
              />
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-chip color="primary">{{ classes.status }}</v-chip>
          </v-list-item-icon>
        </template>
      </v-list-item>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'CtrClassDetail',
  props: {
    classes: {
      type: Object
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
