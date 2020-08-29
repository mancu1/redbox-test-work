<template>
  <el-row>
    <el-col :span="6">
      <div class="title mt-10 mb-5">
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
          <el-col :span="8">
            <div class="text-field-label mt-3 mb-1">Телефон</div>
            <el-input></el-input>
          </el-col>
          <el-col :span="8">
            <div class="text-field-label mt-3 mb-1">E-mail</div>
            <el-input></el-input>
          </el-col>
          <el-col :span="8">
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
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span class="el-upload-list__item-delete">
                  <i class="el-icon-download"></i>
                </span>
                <span class="el-upload-list__item-delete">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
        </div>
      </el-col>
      <el-col class="form-block">
        <div>
          <div class="text-field-label mb-1">Подробное описание</div>
          <el-input type="textarea"></el-input>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FirstStep"
};
</script>

<style></style>
