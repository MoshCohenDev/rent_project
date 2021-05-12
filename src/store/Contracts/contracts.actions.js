import firebaseApi from '../../middlware/firebaseApi';

export default {
  insertContract: async ({state, commit}, data) => {
     await firebaseApi.insertSectionToContracts(data,state.transContract);
    commit('addTransContract', data);
  },

  getContractsById: async ({state, commit}, contract,) => {
    let buildContractObject = {}
    const contractPartsArray = await firebaseApi.getContract(contract);

    for (const part of contractPartsArray) {
      if (part.type === 'title') {
        buildContractObject[part.title] = part;
      } else if (part.type === 'section') {
        buildContractObject[part.title][part.section] = part
      } else if (part.type === 'subSection') {
        buildContractObject[part.title][part.section][part.subSection] = part
      }
    }
    commit('setContract', buildContractObject);

    return buildContractObject;

  },

  uploadImg: async ({rootState, dispatch, state, commit}, file) => {
    const Image = await firebaseApi.uploadImage(file);
    commit('addImage', Image);

  },
  deleteContractById: async ({state, commit}, data) => {
    await firebaseApi.removeSectionById(data);
    commit('deleteSection', data)

  },
  insertUser: ({state, commit}, data) => {
    firebaseApi.insertUser(data)
    commit('aadUsers', data);
  },
  insertAllData: ({dispatch}, {tempUsers, stepper2, stepper3}) => {
    dispatch('insertUser', tempUsers)
    dispatch('insertContract', stepper2)
    dispatch('uploadImg', stepper3)
  },
};
