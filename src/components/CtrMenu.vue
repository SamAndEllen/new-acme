<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-list-item-icon v-on="on" class="mr-0">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-list-item-icon>
        <!-- <v-btn color="primary" dark v-on="on">Dropdown</v-btn> -->
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="openDialog">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <ctr-dialog ref="dialog" />
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import CtrDialog from '@/components/CtrDialog';
export default {
    components: {
        CtrDialog
    },
    data: () => ({
        items: [
            { title: '강의장등록' },
            { title: '강사등록'}
        ],
        dialog: false
    }),
    methods: {
        openDialog() {
            this.$refs.dialog.openDialog();
        }
    }
};
</script>

<style>
</style>