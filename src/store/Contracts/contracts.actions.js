import firebaseApi from '../../middlware/firebaseApi';

export default {
  insertContract: async ({ state, commit }, data) => {
    await firebaseApi.insertContracts(data, state.transContract);
    commit('addTransContract', data);
  },

  insertContractById: async ({ state, commit },data) => {
    debugger
    await firebaseApi.insertContractById(data,state.transContract);
    commit('addTransContractById', data);

  },

  getContractsById: async ({ state, commit }, contract) => {
    const data = await firebaseApi.getContract(contract);
    console.log(data, 'this is data from actions');
    commit('setContract', data);
  },
  uploadImg: async ({ rootState, dispatch, state, commit }, file) => {
    const Image = await firebaseApi.uploadImage(file);
    commit('addImage', Image);

  },
  deleteContractById: async ({ state, commit }, data) => {
    debugger
    await firebaseApi.deleteContract(data);
  }
};
