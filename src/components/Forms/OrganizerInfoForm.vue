<template>
  <el-col class="form-block">
    <div class="form-title mt-2">
      Информация об организаторе
    </div>
    <div>
      <div class="text-field-label mt-3 mb-1">Организатор</div>
      <el-input v-model="organize"></el-input>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "OrganizerInfoForm",
  computed: {
    organize: {
      get() {
        return this.$store.getters.getForm.organize;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "organize",
          value: newValue
        });
      }
    }
  }
};
</script>

<style scoped></style>
