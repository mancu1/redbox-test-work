<template>
  <div id="app">
    <ContentWrapper>
      <router-view />
    </ContentWrapper>
  </div>
</template>

<script>
import ContentWrapper from "@/components/pageLayout/ContentWrapper";
export default {
  name: "app",
  components: { ContentWrapper }
};
</script>

<style scoped></style>
