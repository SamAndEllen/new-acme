<template>
  <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <v-btn block v-on="on" color="primary" class="mb-3">강의장 / 강사 배정하기</v-btn>
      </template>
      <v-sheet class="text-center" height="400px">
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="onOffSheet"
        >close</v-btn>
        <div>The basic usage of v-bottom-sheet. Almost any content can be placed inside this component</div>
         <v-select
      :items="venus"
      label="Select Venus"
      item-text="name"
      item-value="_links.self.href"
      v-model="selectedVenu"
    ></v-select>
    <v-select
      :items="instructors"
      label="Select Instructor"
      item-text="name"
      item-value="_links.self.href"
      v-model="selectedInstructor"
    ></v-select>
      </v-sheet>
    </v-bottom-sheet>  
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    venus: [{"name":"VENUS1"}],
    instructors: [{"name":"INSTRUCTORS1"}]
  }),
  methods: {
    onOffSheet(item) {
        this.sheet = !this.sheet;
        console.log(item);
    }
  }
}
</script>

<style scope>
.v-dialog__container {
    display: block !important;
}
</style>