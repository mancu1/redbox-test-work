<template>
  <el-col class="form-block">
    <div class="form-title mt-2">
      Информация об организаторе
    </div>
    <div>
      <div class="text-field-label mt-3 mb-1">Организатор</div>
      <ValidationProvider rules="required">
        <el-form-item
          label-width="0"
          slot-scope="{ errors }"
          :error="errors[0]"
        >
          <el-input v-model="organize"></el-input>
        </el-form-item>
      </ValidationProvider>
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
