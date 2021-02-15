import firebaseInstance from '../middlware/firebase';
import firebase from 'firebase';
import 'firebase/firestore';

function insertUser(data) {
  const user = firebaseInstance.firebase.auth().currentUser;
  return firebaseInstance.firebase.firestore()
    .collection('users')
    .doc(user.uid)
    .collection('userDetails')
    .add(data);
}

function insertContracts(data, contract) {//for set contract
  return firebaseInstance.firebase.firestore().collection('contracts').doc(contract)
    .collection('sections')
    .add(data);
}

function insertContractById(data, contract) {//for set contract
  debugger
  return firebaseInstance.firebase.firestore().collection('contracts').doc(contract).collection('sections').doc(data).set(
      { children: [data] }, { merge: true });
}
function deleteContract(id,contract) {
  return firebaseInstance.firebase.firestore().collection('contracts').doc(contract)
    .collection('sections').delete(id);}

async function getContract(contract) {
  const sections = [];
  const data = await firebaseInstance.firebase.firestore()
    .collection('contracts')
    .doc(contract)
    .collection('sections')
    .get();
  data.docs.forEach(section => {
    sections.push(section.data());
  });
  console.log(sections, ' this is sections ');
  return sections;
}

function uploadImage(file) {
  console.log(file);
  debugger
  let storageRef = firebase.storage()
    .ref();
  let mountainsRef = storageRef.child(`lease/${file.name}`);
  return mountainsRef.put(file)
    .then(imageData => {
      return imageData.ref.getDownloadURL()
        .then(url => {
          debugger
          return url;
        });
    });
}

export default {
  insertUser,
  insertContracts,
  getContract,
  uploadImage,
  insertContractById,
  deleteContract
};
