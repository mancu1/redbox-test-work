import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/ru.json";
import moment from "moment";

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

extend("required", {
  ...rules.required,
  message: "Это поле обязательно для заполнения"
});

extend("date_before", {
  params: ["end_date"],
  validate(start_date, { end_date }) {
    return moment(start_date).diff(moment(end_date), "h") <= 0;
  },
  message: "Дата должна быть раньше даты окончания"
});

extend("date_after", {
  params: ["start_date"],
  validate(end_date, { start_date }) {
    return moment(start_date).diff(moment(end_date), "h") <= 0;
  },
  message: "Дата должна быть позже даты начала"
});

extend("time_before", {
  params: ["end_time", "start_date", "end_date"],
  validate(start_time, { end_time, start_date, end_date }) {
    const dayDiff = moment(start_date).diff(moment(end_date), "h");
    if (dayDiff < 0) {
      return true;
    } else {
      return moment(start_time).diff(moment(end_time), "minute") < 0;
    }
  },
  message: "Время должно быть раньше времени начала"
});

extend("time_after", {
  params: ["start_time", "start_date", "end_date"],
  validate(end_time, { start_time, start_date, end_date }) {
    const dayDiff = moment(start_date).diff(moment(end_date), "h");
    if (dayDiff < 0) {
      return true;
    } else {
      return moment(start_time).diff(moment(end_time), "minute") < 0;
    }
  },
  message: "Время должно быть позже времени начала"
});

extend("phone", {
  validate(phone) {
    const phoneRegExp = new RegExp(
      "^(\\+7|7|8)?[\\s\\-]?\\(?[0-9]{3}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$"
    );
    return typeof phone === "string" && phoneRegExp.test(phone);
  },
  message: "Телефон должен соответсвовать виду +7 (###) ###-##-##"
});
