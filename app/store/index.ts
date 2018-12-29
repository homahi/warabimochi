import { firebaseMutations, firebaseAction } from 'vuexfire';
export const state = () => ({
  seminors: []
})

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  initalize: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('seminors', ref)
  })
}
