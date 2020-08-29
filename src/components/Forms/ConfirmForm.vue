<template>
  <el-col class="form-block">
    <el-row :gutter="40">
      <el-col class="mt-1" :sm="12" :md="10" :lg="7">
        <el-button class="full-field-w text-field-label form-btn" plain
          >Оменить</el-button
        >
      </el-col>

      <el-col class="mt-1" :sm="12" :md="10" :lg="7">
        <el-button class="full-field-w text-field-label form-btn-filled"
          >Далее</el-button
        >
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "ConfirmForm"
};
</script>

<style scoped></style>
