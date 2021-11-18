import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvPVjIuViV5Y0uwssk6P1WkdJak1kMN3A",
  authDomain: "shop-efe7b.firebaseapp.com",
  projectId: "shop-efe7b",
  storageBucket: "shop-efe7b.appspot.com",
  messagingSenderId: "454282380479",
  appId: "1:454282380479:web:140b24674a1bd3d18d720a",
  measurementId: "G-PMXYX6JNDT"
};
export const app = firebase.initializeApp(firebaseConfig);