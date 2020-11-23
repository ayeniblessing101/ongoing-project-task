import Vue from "vue";
import Vuex from "vuex";
import { data } from "../services/project-service";
import {
  GET_PROJECTS,
  SET_LOADING_MESSAGE,
  SET_ERROR_MESSAGE,
} from "./mutation-types";

Vue.use(Vuex);

const state = {
  projects: {},
  loadingMessage: "",
  errorMessage: "",
};
const mutations = {
  [GET_PROJECTS](state, projects) {
    state.projects = projects;
  },
  [SET_LOADING_MESSAGE](state, loadingMessage) {
    state.loadingMessage = loadingMessage;
  },
  [SET_ERROR_MESSAGE](state, errorMessage) {
    state.errorMessage = errorMessage;
  },
};
const actions = {
  async getProjectsAction({ commit }) {
    try {
      commit(SET_LOADING_MESSAGE, "Getting ongoing projects. Please wait...");
      const projects = await data.getOngoingProjectsData();
      commit(GET_PROJECTS, projects);
      commit(SET_LOADING_MESSAGE, "");
    } catch (error) {
      commit(SET_LOADING_MESSAGE, "");
      commit(SET_ERROR_MESSAGE, error);
    }
  },
};
const modules = {};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
