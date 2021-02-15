import state from './contracts.state'
import mutations from './contracts.mutations'
import getters from './contracts.getters'
import actions from './contracts.actions'


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
