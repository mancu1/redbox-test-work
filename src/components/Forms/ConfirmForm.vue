<template>
  <el-col class="form-block">
    <el-row :gutter="40">
      <el-col class="mt-1" :sm="12" :md="10" :lg="7">
        <el-button
          class="full-field-w text-field-label form-btn"
          plain
          @click="resetForm"
          >Оменить</el-button
        >
      </el-col>

      <el-col class="mt-1" :sm="12" :md="10" :lg="7">
        <el-button
          @click="submit"
          class="full-field-w text-field-label form-btn-filled"
          >Далее</el-button
        >
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  props: {
    validate: {
      type: Function,
      required: true
    }
  },
  name: "ConfirmForm",
  methods: {
    submit() {
      this.validate().then(res => {
        if (res) {
          this.$store.commit("setValidation", true);
          this.goNext();
        }
      });
    },
    resetForm() {
      this.$store.commit("resetForm");
    },
    goNext() {
      this.$router.push("/result");
    }
  }
};
</script>

<style scoped></style>
