<template>
  <el-row>
    <el-col :span="6">
      <div class="title mt-10 mb-5">
        Шаг 2
      </div>
    </el-col>
    <el-col class="content" :span="24">
      <el-col class="form-block mb-6">
        <el-card shadow="always">
          <div class="form-title d-f align-center">
            <i class="el-icon-warning mr-2 large-icon"></i>
            <span>
              Проверьте ваше мероприятие на наличие ошибок, если все в порядке -
              отправляйте на модерацию.
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col class="form-block">
        <el-row type="flex">
          <div class="mr-2 box">
            <div class="text-field-label box-text">
              {{ form.rating }}
            </div>
          </div>
          <el-col class="mr-3" :span="8">
            <div class=" d-f flex-column">
              <div>
                <div class="sub-title">
                  {{ form.eventTitle }}
                </div>
              </div>
              <div class="mt-3">
                <div class="description mb-1">
                  <i class="el-icon-location-outline mr-1"></i>
                  <span> {{ form.address }}</span>
                </div>
                <div class="description mb-1">
                  <i class="el-icon-date mr-1"></i>
                  <span
                    v-for="(date, index) in form.dateAndTimes"
                    v-bind:key="index"
                    >{{ date.startDate | bestDate }}
                  </span>
                </div>
                <div class="description">
                  <i class="el-icon-time mr-1"></i>
                  <span
                    v-for="(date, index) in form.dateAndTimes"
                    v-bind:key="index"
                    >{{ date.startTime | bestTime }}
                  </span>
                </div>
              </div>
              <div class="mt-3">
                <div class="description-title">Контакты</div>
                <div class="mt-1">
                  <div class="small-description mb-1">
                    <i class="description el-icon-phone mr-1"></i>
                    <span>{{ form.phoneNumber }}</span>
                  </div>
                  <div class="small-description">
                    <i class="description el-icon-message mr-1"></i>
                    <span>{{ form.email }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <div class="description-title">{{ form.organize }}</div>
                <div class="mt-1">
                  <div class="small-description">
                    <span> Организатор мероприятия</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="13">
            <div class=" d-f flex-column">
              <img
                v-if="form.photos.length > 0"
                style="background-size: cover; width: 100%;"
                :src="form.photos[0].url"
                :alt="form.photos[0].name"
              />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="form-block">
        <el-row :gutter="20">
          <el-col class="description-long">
            {{ form.eventDescription }}
          </el-col>
        </el-row>
      </el-col>
      <el-col class="form-block">
        <el-row :gutter="40">
          <el-col class="mt-1" :sm="12" :md="10" :lg="7">
            <el-button
              @click="goBack"
              class="full-field-w text-field-label form-btn"
              plain
              >Назад</el-button
            >
          </el-col>

          <el-col class="mt-1" :sm="12" :md="10" :lg="7">
            <el-button
              @click="confirm"
              class="full-field-w text-field-label form-btn-filled"
              >Отправить на модерацию</el-button
            >
          </el-col>
        </el-row>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SecondStep",
  computed: {
    form: {
      get() {
        return this.$store.getters.getForm;
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    confirm() {
      this.$notify({
        type: "success",
        message: "Успешно загрузили",
        title: "Успех"
      });
      this.goBack();
      this.$store.commit("resetForm");
    }
  }
};
</script>
