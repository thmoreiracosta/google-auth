import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnvkt99aGR95Nit9QJ72Mg1cGCCYFf64M",
  authDomain: "auth-246c9.firebaseapp.com",
  projectId: "auth-246c9",
  storageBucket: "auth-246c9.appspot.com",
  messagingSenderId: "443631791447",
  appId: "1:443631791447:web:4e537d1fd8554e81252212"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

