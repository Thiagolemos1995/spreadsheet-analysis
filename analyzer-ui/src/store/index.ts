import { fetchSubscriberFile, fetchSubscriberFileById } from '../services';

// states
export const state = () => ({
  subscriberFileList: [],
  subscriberFileData: [],
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
  async getSubscriberFileById({ commit }, id) {
    const subscriberFileData = await fetchSubscriberFileById(id);
    commit('addsubscriberFileData', subscriberFileData);
    return subscriberFileData;
  },
};

//mutations
export const mutations = {
  addFileList(state, subscriberFileList) {
    state.subscriberFileList = subscriberFileList;
  },
  addsubscriberFileData(state, subscriberFileData) {
    state.subscriberFileData = subscriberFileData;
  },
};
