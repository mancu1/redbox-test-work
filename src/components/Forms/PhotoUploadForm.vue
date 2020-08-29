<template>
  <el-col class="form-block">
    <div class="text-field-label mb-3">
      Фотография
    </div>
    <div>
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
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
</template>

<script>
export default {
  name: "PhotoUploadForm"
};
</script>

<style scoped></style>
