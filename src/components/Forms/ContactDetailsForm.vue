<template>
  <el-col class="form-block">
    <div class="form-title">
      Контактные данные
    </div>
    <el-row :gutter="20">
      <el-col :xs="24" :md="8">
        <div class="text-field-label mt-3 mb-1">Телефон</div>
        <ValidationProvider rules="required|phone">
          <el-form-item
            label-width="0"
            slot-scope="{ errors }"
            :error="errors[0]"
          >
            <el-input
              type="tel"
              v-mask="'+7 (###) ###-##-##'"
              v-model="phoneNumber"
            ></el-input>
          </el-form-item>
        </ValidationProvider>
      </el-col>
      <el-col :xs="24" :md="8">
        <div class="text-field-label mt-3 mb-1">E-mail</div>
        <ValidationProvider name="email" rules="required|email">
          <el-form-item
            label-width="0"
            slot-scope="{ errors }"
            :error="errors[0]"
          >
            <el-input type="email" v-model="email"></el-input>
          </el-form-item>
        </ValidationProvider>
      </el-col>
      <el-col :xs="24" :md="8">
        <div class="text-field-label mt-3 mb-1">Город организатора</div>
        <ValidationProvider rules="required">
          <el-form-item
            label-width="0"
            slot-scope="{ errors }"
            :error="errors[0]"
          >
            <el-input v-model="organizeCity"></el-input>
          </el-form-item>
        </ValidationProvider>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "ContactDetailsForm",
  computed: {
    phoneNumber: {
      get() {
        return this.$store.getters.getForm.phoneNumber;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "phoneNumber",
          value: newValue
        });
      }
    },
    email: {
      get() {
        return this.$store.getters.getForm.email;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "email",
          value: newValue
        });
      }
    },
    organizeCity: {
      get() {
        return this.$store.getters.getForm.organizeCity;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "organizeCity",
          value: newValue
        });
      }
    }
  }
};
</script>

<style scoped></style>
