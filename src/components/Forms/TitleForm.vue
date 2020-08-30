<template>
  <el-col class="form-block">
    <div class="form-title">
      Общая информация
    </div>
    <div>
      <div class="text-field-label mt-3 mb-1">Название</div>
      <ValidationProvider rules="required">
        <el-form-item
          label-width="0"
          slot-scope="{ errors }"
          :error="errors[0]"
        >
          <el-input v-model="eventTitle"></el-input>
        </el-form-item>
      </ValidationProvider>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "TitleForm",
  computed: {
    eventTitle: {
      get() {
        return this.$store.getters.getForm.eventTitle;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "eventTitle",
          value: newValue
        });
      }
    }
  }
};
</script>

<style scoped></style>
