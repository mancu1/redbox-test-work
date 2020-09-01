import fetchRatings from "@/helper/fetchs/fetchRatings";
import moment from "moment";

const state = {
  form: {
    organize: "",
    phoneNumber: "",
    email: "",
    organizeCity: "",
    eventTitle: "",
    photos: [],
    eventDescription: "",
    dateAndTimes: [],
    newDateAndTimes: {
      startDate: moment().toDate(),
      startTime: moment().toDate(),
      endDate: moment().toDate(),
      endTime: moment()
        .add(2, "m")
        .toDate()
    },
    rating: "", //{ id: 0, title: ""}
    address: ""
  },
  validate: false,
  ratings: []
};

const getters = {
  getForm: state => state.form,
  getRatings: state => state.ratings,
  isValidate: state => state.validate
};

const mutations = {
  setFormData(state, { fieldName, value }) {
    state.form[fieldName] = value;
  },
  setRating(state, ratings) {
    state.ratings = ratings;
  },
  setNewDateAndTime(state, { fieldName, value }) {
    state.form.newDateAndTimes[fieldName] = value;
  },
  addDateAndTime(state) {
    state.form.dateAndTimes.splice(0, 0, state.form.newDateAndTimes);
    state.form.newDateAndTimes = {
      startDate: moment().toDate(),
      startTime: moment().toDate(),
      endDate: moment().toDate(),
      endTime: moment()
        .add(2, "m")
        .toDate()
    };
  },
  deleteDateAndTime(state, index) {
    state.form.dateAndTimes.splice(index, 1);
  },
  setValidation(state, validate) {
    state.validate = validate;
  },
  resetForm(state) {
    Object.keys(state.form).forEach(key => {
      switch (typeof state.form[key]) {
        case "string": {
          state.form[key] = "";
          break;
        }
        case "boolean": {
          state.form[key] = false;
          break;
        }
        case "number": {
          state.form[key] = 0;
          break;
        }
        case "object": {
          if (Array.isArray(state.form[key])) {
            state.form[key] = [];
            break;
          }
        }
      }
    });
  }
};

const actions = {
  fetchRating(context) {
    fetchRatings().then(rating => {
      context.commit("setRating", rating);
    });
  }
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
