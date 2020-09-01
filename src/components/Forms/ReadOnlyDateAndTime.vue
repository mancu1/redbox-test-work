<template>
  <el-col class="form-block mb-0">
    <ValidationProvider ref="provider" rules="requiredDate">
      <el-form-item label-width="0" slot-scope="{ errors }" :error="errors[0]">
        <el-col
          v-for="(dateAndTimeObj, ind) in dateAndTime"
          :key="ind"
          class="added-date-block"
          :class="dateAndTime.length - 1 !== ind ? 'mb-4 ' : 'mb-1'"
        >
          <el-col>
            <el-row type="flex" justify="center" :gutter="20">
              <el-col :xs="24" :md="12" :lg="6">
                <div class="text-field-label mb-1">Дата начала</div>
                <el-date-picker
                  readonly
                  :value="dateAndTimeObj.startDate"
                  class="full-field-w"
                  type="date"
                >
                </el-date-picker>
              </el-col>
              <el-col :xs="24" :md="12" :lg="6">
                <div class="text-field-label mb-1">Время начала</div>
                <el-time-picker
                  readonly
                  class="full-field-w"
                  :value="dateAndTimeObj.startTime"
                  format="hh:mm"
                >
                </el-time-picker>
              </el-col>
              <div class="mt-6 divider"></div>
              <el-col :xs="24" :md="12" :lg="6">
                <div class="text-field-label mb-1">Дата окончания</div>
                <el-date-picker
                  readonly
                  :value="dateAndTimeObj.endDate"
                  class="full-field-w"
                  type="date"
                >
                </el-date-picker>
              </el-col>
              <el-col :xs="24" :md="12" :lg="6">
                <div class="text-field-label mb-1">Время окончания</div>
                <el-time-picker
                  readonly
                  class="full-field-w"
                  :value="dateAndTimeObj.endTime"
                  format="hh:mm"
                >
                </el-time-picker>
              </el-col>
            </el-row>
          </el-col>
          <div class="absolute-button-parent mt-n4 mr-n4">
            <span @click="deleteDateAndTime(index)" class="absolute-button">
              <i class="dark-icon el-icon-error"></i>
            </span>
          </div>
        </el-col>
      </el-form-item>
    </ValidationProvider>
  </el-col>
</template>

<script>
export default {
  name: "ReadOnlyDateAndTime",
  computed: {
    dateAndTime: {
      get() {
        return this.$store.getters.getForm.dateAndTimes;
      }
    }
  },
  methods: {
    deleteDateAndTime(index) {
      this.$store.commit("deleteDateAndTime", index);
    }
  },
  watch: {
    dateAndTime(val) {
      this.$refs.provider.validate(val);
    }
  }
};
</script>

<style scoped></style>
