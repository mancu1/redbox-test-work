<template>
  <el-col class="form-block mb-3">
    <div>
      <div class="text-field-label mb-1">Подробное описание</div>
      <ValidationProvider rules="required">
        <el-form-item
          label-width="0"
          slot-scope="{ errors }"
          :error="errors[0]"
        >
          <el-input type="textarea" v-model="eventDescription"></el-input>
        </el-form-item>
      </ValidationProvider>
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
