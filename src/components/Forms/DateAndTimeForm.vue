<template>
  <div>
    <el-col class="form-block mb-0">
      <el-col class="mb-4 added-date-block" v-for="i in 2" :key="i">
        <el-col>
          <el-row type="flex" justify="center" :gutter="20">
            <el-col :xs="24" :md="12" :lg="6">
              <div class="text-field-label mb-1">Дата начала</div>
              <el-date-picker class="full-field-w" type="date">
              </el-date-picker>
            </el-col>
            <el-col :xs="24" :md="12" :lg="6">
              <div class="text-field-label mb-1">Время начала</div>
              <el-time-picker class="full-field-w" format="hh:mm">
              </el-time-picker>
            </el-col>
            <div class="mt-6 divider"></div>
            <el-col :xs="24" :md="12" :lg="6">
              <div class="text-field-label mb-1">Дата окончания</div>
              <el-date-picker class="full-field-w" type="date">
              </el-date-picker>
            </el-col>
            <el-col :xs="24" :md="12" :lg="6">
              <div class="text-field-label mb-1">Время окончания</div>
              <el-time-picker class="full-field-w" format="hh:mm">
              </el-time-picker>
            </el-col>
          </el-row>
        </el-col>
        <div class="absolute-button-parent mt-n4 mr-n3">
          <span class="absolute-button">
            <i class="dark-icon el-icon-error"></i>
          </span>
        </div> </el-col
    ></el-col>
    <el-col class="form-block">
      <el-row type="flex" justify="center" :gutter="15">
        <el-col :xs="24" :md="12" :lg="6">
          <div class="text-field-label mb-1">Дата начала</div>
          <el-date-picker class="full-field-w" type="date"> </el-date-picker>
        </el-col>
        <el-col :xs="24" :md="12" :lg="6">
          <div class="text-field-label mb-1">Время начала</div>
          <el-time-picker class="full-field-w" format="hh:mm"> </el-time-picker>
        </el-col>
        <div class="mt-6 divider"></div>
        <el-col :xs="24" :md="12" :lg="6">
          <div class="text-field-label mb-1">Дата окончания</div>
          <el-date-picker class="full-field-w" type="date"> </el-date-picker>
        </el-col>
        <el-col :xs="24" :md="12" :lg="6">
          <div class="text-field-label mb-1">Время окончания</div>
          <el-time-picker class="full-field-w" format="hh:mm"> </el-time-picker>
        </el-col>
      </el-row>
      <el-row class="mt-3">
        <el-col>
          <el-button class="text-field-label form-btn" plain
            >+ Добавить дату</el-button
          >
        </el-col>
      </el-row>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "DateAndTimeForm"
};
</script>

<style scoped></style>
