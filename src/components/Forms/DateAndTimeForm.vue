<template>
  <el-col class="form-block">
    <ValidationObserver vid="date">
      <el-form ref="form" slot-scope="{ validate }" label-width="120px">
        <el-row type="flex" justify="center" :gutter="15">
          <el-col :xs="24" :md="12" :lg="6">
            <div class="text-field-label mb-1">Дата начала</div>
            <ValidationProvider
              rules="required|date_before:@end-date"
              name="start-date"
            >
              <el-form-item
                label-width="0"
                slot-scope="{ errors }"
                :error="errors[0]"
              >
                <el-date-picker
                  class="full-field-w"
                  type="date"
                  v-model="startDate"
                >
                </el-date-picker>
              </el-form-item>
            </ValidationProvider>
          </el-col>
          <el-col :xs="24" :md="12" :lg="6">
            <div class="text-field-label mb-1">Время начала</div>
            <ValidationProvider
              rules="required|time_before:@end-time,@start-date,@end-date"
              name="start-time"
            >
              <el-form-item
                label-width="0"
                slot-scope="{ errors }"
                :error="errors[0]"
              >
                <el-time-picker
                  class="full-field-w"
                  v-model="startTime"
                  format="hh:mm"
                >
                </el-time-picker>
              </el-form-item>
            </ValidationProvider>
          </el-col>
          <div class="mt-6 divider"></div>
          <el-col :xs="24" :md="12" :lg="6">
            <div class="text-field-label mb-1">Дата окончания</div>
            <ValidationProvider
              name="end-date"
              rules="required|date_after:@start-date"
            >
              <el-form-item
                label-width="0"
                slot-scope="{ errors }"
                :error="errors[0]"
              >
                <el-date-picker
                  class="full-field-w"
                  v-model="endDate"
                  type="date"
                >
                </el-date-picker>
              </el-form-item>
            </ValidationProvider>
          </el-col>
          <el-col :xs="24" :md="12" :lg="6">
            <div class="text-field-label mb-1">Время окончания</div>
            <ValidationProvider
              rules="required|time_after:@start-time,@start-date,@end-date"
              name="end-time"
            >
              <el-form-item
                label-width="0"
                slot-scope="{ errors }"
                :error="errors[0]"
              >
                <el-time-picker
                  class="full-field-w"
                  v-model="endTime"
                  format="hh:mm"
                >
                </el-time-picker>
              </el-form-item>
            </ValidationProvider>
          </el-col>
        </el-row>
        <el-row class="mt-1 mb-2">
          <el-col>
            <el-button
              class="text-field-label form-btn"
              plain
              @click="pressButton(validate)"
            >
              + Добавить дату
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </ValidationObserver>
  </el-col>
</template>

<script>
export default {
  name: "DateAndTimeForm",
  computed: {
    startDate: {
      get() {
        return this.$store.getters.getForm.newDateAndTimes.startDate;
      },
      set(newValue) {
        this.$store.commit("setNewDateAndTime", {
          fieldName: "startDate",
          value: newValue
        });
      }
    },
    startTime: {
      get() {
        return this.$store.getters.getForm.newDateAndTimes.startTime;
      },
      set(newValue) {
        this.$store.commit("setNewDateAndTime", {
          fieldName: "startTime",
          value: newValue
        });
      }
    },
    endDate: {
      get() {
        return this.$store.getters.getForm.newDateAndTimes.endDate;
      },
      set(newValue) {
        this.$store.commit("setNewDateAndTime", {
          fieldName: "endDate",
          value: newValue
        });
      }
    },
    endTime: {
      get() {
        return this.$store.getters.getForm.newDateAndTimes.endTime;
      },
      set(newValue) {
        this.$store.commit("setNewDateAndTime", {
          fieldName: "endTime",
          value: newValue
        });
      }
    }
  },
  methods: {
    addDateAndTime() {
      this.$store.commit("addDateAndTime");
    },
    pressButton(validate) {
      validate().then(res => {
        if (res) this.addDateAndTime();
      });
    }
  }
};
</script>

<style scoped></style>
