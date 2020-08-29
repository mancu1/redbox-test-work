<template>
  <el-col class="form-block">
    <div class="form-title">
      Контактные данные
    </div>
    <el-row :gutter="20">
      <el-col :xs="24" :md="8">
        <div class="text-field-label mt-3 mb-1">Телефон</div>
        <el-input></el-input>
      </el-col>
      <el-col :xs="24" :md="8">
        <div class="text-field-label mt-3 mb-1">E-mail</div>
        <el-input></el-input>
      </el-col>
      <el-col :xs="24" :md="8">
        <div class="text-field-label mt-3 mb-1">Город организатора</div>
        <el-input></el-input>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "ContactDetailsForm"
};
</script>

<style scoped></style>
