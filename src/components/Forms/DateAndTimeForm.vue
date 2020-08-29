<template>
  <el-col class="form-block">
    <el-row type="flex" justify="center" :gutter="15">
      <el-col :xs="24" :md="12" :lg="6">
        <div class="text-field-label mb-1">Дата начала</div>
        <el-date-picker class="full-field-w" type="date" v-model="startDate">
        </el-date-picker>
      </el-col>
      <el-col :xs="24" :md="12" :lg="6">
        <div class="text-field-label mb-1">Время начала</div>
        <el-time-picker class="full-field-w" v-model="startTime" format="hh:mm">
        </el-time-picker>
      </el-col>
      <div class="mt-6 divider"></div>
      <el-col :xs="24" :md="12" :lg="6">
        <div class="text-field-label mb-1">Дата окончания</div>
        <el-date-picker class="full-field-w" v-model="endDate" type="date">
        </el-date-picker>
      </el-col>
      <el-col :xs="24" :md="12" :lg="6">
        <div class="text-field-label mb-1">Время окончания</div>
        <el-time-picker class="full-field-w" v-model="endTime" format="hh:mm">
        </el-time-picker>
      </el-col>
    </el-row>
    <el-row class="mt-3">
      <el-col>
        <el-button
          class="text-field-label form-btn"
          plain
          @click="addDateAndTime"
        >
          + Добавить дату
        </el-button>
      </el-col>
    </el-row>
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
    }
  }
};
</script>

<style scoped></style>
