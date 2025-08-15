// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } = require("./env.json");


export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
