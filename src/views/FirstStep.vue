<template>
  <el-row>
    <el-col :span="6">
      <div class="title mt-10 mb-5">
        Шаг 1
      </div>
    </el-col>
    <el-col class="content dart-text" :span="24">
      <OrganizerInfoForm />
      <ContactDetailsForm />
      <TitleForm />
      <PhotoUploadForm />
      <DescriptionForm />
      <DateAndTimeForm />
      <RatingAndAddressForm />
      <ConfirmForm />
    </el-col>
  </el-row>
</template>

<script>
import OrganizerInfoForm from "@/components/Forms/OrganizerInfoForm";
import ContactDetailsForm from "@/components/Forms/ContactDetailsForm";
import TitleForm from "@/components/Forms/TitleForm";
import PhotoUploadForm from "@/components/Forms/PhotoUploadForm";
import DescriptionForm from "@/components/Forms/DescriptionForm";
import DateAndTimeForm from "@/components/Forms/DateAndTimeForm";
import RatingAndAddressForm from "@/components/Forms/RatingAndAddressForm";
import ConfirmForm from "@/components/Forms/ConfirmForm";

export default {
  name: "FirstStep",
  components: {
    ConfirmForm,
    RatingAndAddressForm,
    DateAndTimeForm,
    DescriptionForm,
    PhotoUploadForm,
    TitleForm,
    ContactDetailsForm,
    OrganizerInfoForm: OrganizerInfoForm
  },
  created() {
    this.$store.dispatch("fetchRating");
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("fetchRating");
    next();
  }
};
</script>
