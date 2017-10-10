import firebase from "firebase";

const config = {
  apiKey:             "yourCredentialsFromTheFirebasePage",
  authDomain:         "yourCredentialsFromTheFirebasePage",
  databaseURL:        "yourCredentialsFromTheFirebasePage",
  projectId:          "yourCredentialsFromTheFirebasePage",
  storageBucket:      "yourCredentialsFromTheFirebasePage",
  messagingSenderId:  "yourCredentialsFromTheFirebasePage"
};
firebase.initializeApp(config);

export default firebase;