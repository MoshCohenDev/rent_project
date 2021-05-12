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
async function getContract(contract) {
  const sections = [];
  const data = await firebaseInstance.firebase.firestore().collection(`contracts/${contract}/parts/`).get()
  data.docs.forEach(section => {
    const sec = section.data()
    sec.sid = section.id
    sections.push(sec);
  });
  return sections;
}

function insertSectionToContracts(data, contract) {
  return firebaseInstance.firebase.firestore().doc(`contracts/${contract}/parts/${data.id}`).set(data);
}

function removeSectionById(id, contract) {
  return firebaseInstance.firebase.firestore().collection('contracts').doc(contract)
    .collection('sections').delete(id);
}



function uploadImage(file) {
  let storageRef = firebase.storage()
    .ref();
  let mountainsRef = storageRef.child(`lease/${file.name}`);
  return mountainsRef.put(file)
    .then(imageData => {
      return imageData.ref.getDownloadURL()
        .then(url => {
          return url;
        });
    });
}

export default {
  insertUser,
  insertSectionToContracts,
  getContract,
  uploadImage,
  removeSectionById
};
