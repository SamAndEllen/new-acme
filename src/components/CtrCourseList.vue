<template>
  <v-list>
    <v-list-item-group>
      <v-divider></v-divider>
      <template v-for="(item, index) in classes">
        <v-list-item :key="item.name" @click="move(item)">
          <template>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.name }}
                <v-rating
                  v-model="item.rate"
                  color="yellow darken-3"
                  background-color="grey lighten-2"
                  empty-icon="$vuetify.icons.ratingFull"
                  half-increments
                  v-if="item.rate > 0"
                  readonly
                />
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-chip color="primary">{{ item.status }}</v-chip>
            </v-list-item-icon>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CtrCourseList',
  props: {
    classes: {
      type: Array
    }
  },
  methods: {
    move (item) {
      this.$router.push({ name: 'Class', query: { id: item.id } })
    }
  }
};
</script>
