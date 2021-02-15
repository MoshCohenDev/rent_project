import firebaseApi from '../../middlware/firebaseApi';

export default {
  insertUsers: async ({ state, commit }, data) => {
    debugger

    await firebaseApi.insertUser(data);

    commit('aadUsers', data);


  },
};
