<template>
  <v-list>
    <v-list-item-group>
      <v-divider></v-divider>
      <template v-for="(item, index) in classes">
        <v-list-item :key="item.name">
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
import _ from 'lodash';

export default {
  name: 'CtrCourseList',
  props: {
    course: {
      type: Object
    }
  },
  data: () => ({
    classes: [],
  }),
  async created () {
    await axios
      .get(this.course._links.clazzList.href)
      .then(res => {
        res.data._embedded.clazz.forEach(item => {
          const id = _.last(_.split(item._links.clazz.href, '/'), 1);
          this.classes.push({
            name: `class${id}`,
            rate: item.evaluationRate,
            status: item.status
          })
        });
      })
      .catch(err => console.log(err));
  }
};
</script>
