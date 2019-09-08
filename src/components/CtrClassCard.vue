<template>
  <v-card class="hand__cusor" @click="move" flat dark>
    <v-img
      class="white--text"
      height="200"
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
      :src="item.image"
    >
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ item.title }}
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon>mdi-timer</v-icon>
                {{ item.duration }}h
            </v-list-item-icon>
        </v-list-item>
    </v-img>
  </v-card>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'CtrClassCard',
  props: {
    item: {
      type: Object
    },
  },
  data: () => ({
  }),
  methods: {
    move () {
      const id = _.last(_.split(this.item._links.course.href, '/'), 1);
      this.$router.push({ name: 'Course', params: { course: this.item }, query: { id } })
    }
  }
};
</script>
