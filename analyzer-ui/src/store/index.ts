import { fetchSubscriberFile } from '../services/fetchSubscriberFiles';

// states
export const state = () => ({
  subscriberFileList: [],
});

//getters
export const getters = {};

//actions
export const actions = {
  async getSubscriberFiles({ commit }) {
    const subscriberFileList = await fetchSubscriberFile();
    commit('addFileList', subscriberFileList);
    return subscriberFileList;
  },
};

//mutations
export const mutations = {
  addFileList(state, subscriberFileList) {
    state.subscriberFileList = subscriberFileList;
  },
};
