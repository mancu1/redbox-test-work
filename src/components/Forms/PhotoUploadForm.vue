<template>
  <el-col class="form-block">
    <div class="text-field-label mb-3">
      Фотография
    </div>
    <div>
      <ValidationProvider ref="provider" rules="requiredPhoto">
        <el-form-item
          label-width="0"
          slot-scope="{ errors }"
          :error="errors[0]"
        >
          <Uploader
            :limit="1"
            action="#"
            ref="upl"
            accept="image/*"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="uploadFile"
            :file-list="files"
            :on-remove="removeFile"
          >
            <template slot="default">
              <img
                class="mt-4"
                :src="require('@/assets/icons/photoLoaderIcon.png')"
                alt="PhotoLoaderGroup"
              />
            </template>
            <div class="file-block mr-5" slot="file" slot-scope="{ file }">
              <div
                class="bg-img"
                :style="`background-image: url(${file.url});`"
              >
                <div class="close-button-bg absolute-button"></div>
              </div>
              <div>
                <span class="absolute-button close-button">
                  <i
                    @click="$refs.upl.handleRemove(file)"
                    class="dark-icon el-icon-error"
                  ></i>
                </span>
              </div>
            </div>
          </Uploader>
          <div class="under-photo">
            Главная фотография (обложка мероприятия)
          </div>
        </el-form-item>
      </ValidationProvider>
    </div>
  </el-col>
</template>

<script>
import Uploader from "@/components/edted-el-uploader/Uploader";
export default {
  components: { Uploader },
  name: "PhotoUploadForm",
  mounted() {
    if (this.files.length > 0) {
      this.$refs.provider.validate(this.files);
    }
  },
  computed: {
    files: {
      get() {
        return this.$store.getters.getForm.photos;
      },
      set(newValue) {
        this.$store.commit("setFormData", {
          fieldName: "photos",
          value: newValue
        });
      }
    }
  },
  methods: {
    uploadFile(file, fileList) {
      this.files = fileList;
      this.$refs.provider.validate(fileList);
    },
    removeFile(remFile, fileList) {
      this.files = fileList;
      this.$refs.provider.validate(fileList);
    }
  }
};
</script>

<style>
.file-block {
  width: 100%;
  height: 100%;
}

.close-button {
  z-index: 200;
  margin-right: -18px;
  margin-top: -18px;
}
.close-button-bg {
  width: 12px;
  height: 12px;
  margin-top: -2px;
  margin-right: -2px;
  background-color: #ffffff;
  border-color: #ffffff;
}

.el-upload-list__item {
  overflow: unset !important;
  width: 126px !important;
  height: 126px !important;
  margin: 0 !important;
}

.el-upload--picture-card {
  margin-bottom: 15px;
  width: 126px;
  height: 126px;
  border: 3px solid var(--light-border-color);
}
.el-upload--picture-card:hover {
  border: 3px solid var(--medium-boder-color);
}

.bg-img {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.under-photo {
  max-width: 126px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  /* or 140% */

  color: #211536;

  opacity: 0.7;
}
</style>
