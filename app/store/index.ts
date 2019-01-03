import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from 'firebase';
export const state = () => ({
  seminors: []
})

export const mutations = {
  ...firebaseMutations
}

export const getters = {
  seminors: state => {
    return state.seminors.map(seminor => {
      let convertedSeminor = Object.assign({}, seminor,
        {
          id: seminor.id,
          date: seminor.date ? new firebase.firestore.Timestamp(seminor.date.seconds, seminor.date.nanoseconds).toDate() : null
        })
      return convertedSeminor;
    })
  }
}

export const actions = {
  initalize: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('seminors', ref)
  })
}
