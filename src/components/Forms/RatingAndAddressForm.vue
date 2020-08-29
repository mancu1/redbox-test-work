<template>
  <el-col class="form-block">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <div class="text-field-label mt-1 mb-1">Рейтинг мероприятия</div>
        <el-select class="full-field-w" :value="1">
          <el-option v-for="item in 5" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div class="text-field-label mt-1 mb-1">Адрес мероприятия</div>
        <el-input></el-input>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "RatingAndAddressForm"
};
</script>

<style scoped></style>
