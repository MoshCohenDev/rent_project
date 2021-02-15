import firebaseApi from "../../middlware/firebaseApi";
export default {
  aadUsers: (state, data) => (state.userInformation.push(data)),


}
