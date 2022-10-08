import { createStore } from "vuex";
import state from './state';
import getters from './getters';
import modules from './modules';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
});
