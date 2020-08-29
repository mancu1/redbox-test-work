import fetchRatings from "@/helper/fetchs/fetchRatings";

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
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: ""
    },
    rating: "", //{ id: 0, title: ""}
    address: ""
  },
  ratings: []
};

const getters = {
  getForm: state => state.form,
  getRatings: state => state.ratings
};

const mutations = {
  setFormData(state, { fieldName, value }) {
    state.form[fieldName] = value;
  },
  setRating(state, ratings) {
    state.ratings = ratings;
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
