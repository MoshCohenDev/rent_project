export default {
  setContract: (state, data) => (state.sections = data),
  deleteContract:(state,id)=>(state.sections.splice(id,1)),
  seTransContract: (state, data) => (state.transContract = data),
  addTransContract: (state, data) => (state.sections.push(data)),
  addTransContractById: (state, data) => (state.sections.apply(data)),
  addImage: (state, data) => (state.imageUp.push(data)),

};

