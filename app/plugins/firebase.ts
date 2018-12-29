import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    "projectId": process.env.firebaseProjectId
})
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true }
db.settings(settings)
export { db }