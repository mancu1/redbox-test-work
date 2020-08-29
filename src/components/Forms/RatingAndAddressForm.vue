<template>
  <el-col class="form-block">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <div class="text-field-label mt-1 mb-1">Рейтинг мероприятия</div>
        <el-select class="full-field-w" v-model="rating">
          <el-option
            v-for="availableRating in ratings"
            :key="availableRating.id"
            :label="availableRating.title"
            :value="availableRating.title"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div class="text-field-label mt-1 mb-1">Адрес мероприятия</div>
        <el-input v-model="address"></el-input>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "RatingAndAddressForm",
  computed: {
    address: {
      get() {
        return this.$store.getters.getForm.address;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "address",
          value: newValue
        });
      }
    },
    rating: {
      get() {
        return this.$store.getters.getForm.rating;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "rating",
          value: newValue
        });
      }
    },
    ratings: {
      get() {
        return this.$store.getters.getRatings;
      }
    }
  }
};
</script>

<style scoped></style>
