export default {
  setContract: (state, data) => (state.sections = data),
  setContractSid: (state, id) => (state.sid = id),
  aadUsers: (state, data) => (state.userInformation.push(data)),
  deleteSection:(state,id)=>(state.sections.splice(id,1)),
  seTransContract: (state, data) => (state.transContract = data),
  addTransContract: (state, data) => (state.sections.push(data)),
  // addTransContractById: (state, data) =>{
  //   state.sections[data.index].children.push(data.addNewSectionItem)
  // },
  addImage: (state, data) => (state.imageUp.push(data)),

};
//
// async getContract({commit},contract){
//   let buildContractObject = {}
//   const contractPartsArray = [];
//   const cont = await firebaseApi.getContracts(contract);
//   cont.forEach(part =>{
//     contractPartsArray.push(part.data())
//   }).then(()=>{
//     for (const part of contractPartsArray){
//       if(part.type === 'title'){
//         buildContractObject[part.number] = part;
//       }
//       if(part.type === 'section'){
//         buildContractObject[part.title][part.section] = part
//       }
//       if(part.type === 'subSection'){
//         buildContractObject[part.title][part.section][part.subSection] = part
//       }
//     }
//   })
//   return buildContractObject;
// }
