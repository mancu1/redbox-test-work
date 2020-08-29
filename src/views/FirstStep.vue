<template>
  <el-row>
    <el-col :span="6">
      <div class="title mt-10 mb-5 ml-1">
        Шаг 1
      </div>
    </el-col>
    <el-col class="content" :span="24">
      <el-col class="form-block">
        <div class="form-title">
          Информация об организаторе
        </div>
        <div>
          <div class="text-field-label mt-3 mb-1">Организатор</div>
          <el-input></el-input>
        </div>
      </el-col>
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
      <el-col class="form-block">
        <div class="form-title">
          Общая информация
        </div>
        <div>
          <div class="text-field-label mt-3 mb-1">Название</div>
          <el-input></el-input>
        </div>
      </el-col>
      <el-col class="form-block">
        <div class="text-field-label mb-3">
          Фотография
        </div>
        <div>
          <el-upload
            class="photo-uploader"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                style=" background-size: cover;"
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-delete">
                  <i style="font-size: 32px" class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </div>
      </el-col>
      <el-col class="form-block mb-5">
        <div>
          <div class="text-field-label mb-1">Подробное описание</div>
          <el-input type="textarea"></el-input>
        </div>
      </el-col>
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
            <el-time-picker class="full-field-w" format="hh:mm">
            </el-time-picker>
          </el-col>
          <div class="mt-6 divider"></div>
          <el-col :xs="24" :md="12" :lg="6">
            <div class="text-field-label mb-1">Дата окончания</div>
            <el-date-picker class="full-field-w" type="date"> </el-date-picker>
          </el-col>
          <el-col :xs="24" :md="12" :lg="6">
            <div class="text-field-label mb-1">Время окончания</div>
            <el-time-picker class="full-field-w" format="hh:mm">
            </el-time-picker>
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
      <el-col class="form-block">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <div class="text-field-label mt-1 mb-1">Рейтинг мероприятия</div>
            <el-select class="full-field-w" :value="1">
              <el-option
                v-for="item in 5"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="text-field-label mt-1 mb-1">Адрес мероприятия</div>
            <el-input></el-input>
          </el-col>
        </el-row>
      </el-col>
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
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FirstStep"
};
</script>

<style>
.added-date-block {
  padding: 25px 20px;
  background-color: rgba(205, 177, 251, 0.1);
}

.full-field-w {
  width: 100% !important;
}
</style>
