import * as firebase from 'firebase';
import { FirebaseConfig } from "./firebase.config";

let db; // Database
const GoodocTeams = "goodoc-teams";
const settings = {/* your settings... */ timestampsInSnapshots: true};

export const FirebaseInit = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
  }
  db = firebase.firestore();
  db.settings(settings);
};

export const exampleGetFireDB = () => {
  return db.collection(GoodocTeams).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
};
