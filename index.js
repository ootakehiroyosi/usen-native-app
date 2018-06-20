import Expo from "expo";
import * as firebase from "firebase";
import App from "./src/main/js/App";

import ENV from "./src/main/js/env";

const config = {
  apiKey: ENV.API_KEY,
  authDomain: ENV.AUTH_DOMAIN,
  databaseURL: ENV.DATABASE_URL,
  projectId: ENV.PROJECT_ID,
  storageBucket: ENV.STORAGE_BUCKET,
  messagingSenderId: ENV.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

Expo.registerRootComponent(App);
