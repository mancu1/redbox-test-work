<template>
  <el-row>
    <el-col :span="6">
      <div class="title mt-10 mb-5">
        Шаг 1
      </div>
    </el-col>
    <el-col class="content dart-text" :span="24">
      <ValidationObserver>
        <el-form ref="form" slot-scope="{ validate }" label-width="120px">
          <OrganizerInfoForm />
          <ContactDetailsForm />
          <TitleForm />
          <PhotoUploadForm />
          <DescriptionForm />
          <ReadOnlyDateAndTime />
          <DateAndTimeForm />
          <RatingAndAddressForm />
          <ConfirmForm :validate="validate" />
        </el-form>
      </ValidationObserver>
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
import ReadOnlyDateAndTime from "@/components/Forms/ReadOnlyDateAndTime";

export default {
  name: "FirstStep",
  components: {
    ReadOnlyDateAndTime,
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
