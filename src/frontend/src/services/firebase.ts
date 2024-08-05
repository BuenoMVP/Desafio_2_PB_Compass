import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ_UiykKrnXPMRuMrAkv4bkVlnJDGso70",
  authDomain: "games-777c6.firebaseapp.com",
  projectId: "games-777c6",
  storageBucket: "games-777c6.appspot.com",
  messagingSenderId: "517443804048",
  appId: "1:517443804048:web:92c578f08f3ecfbd147115",
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
