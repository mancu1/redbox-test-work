<template>
  <el-col class="form-block mb-5">
    <div>
      <div class="text-field-label mb-1">Подробное описание</div>
      <el-input type="textarea" v-model="eventDescription"></el-input>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "DescriptionForm",
  computed: {
    eventDescription: {
      get() {
        return this.$store.getters.getForm.eventDescription;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "eventDescription",
          value: newValue
        });
      }
    }
  }
};
</script>

<style scoped></style>
