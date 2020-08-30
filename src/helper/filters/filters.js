import Vue from "vue";
import moment from "moment";

moment.locale("ru");

Vue.filter("bestDate", function(value) {
  return moment(value).format("D MMM YYYY (dd)");
});

Vue.filter("bestTime", function(value) {
  return moment(value).format("HH:mm");
});
