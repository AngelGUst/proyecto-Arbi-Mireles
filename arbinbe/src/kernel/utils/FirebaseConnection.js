import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDBgRsJVnJqkMVBURWLAIvCeCltya809EY",
    authDomain: "airbe-5a81e.firebaseapp.com",
    projectId: "airbe-5a81e",
    storageBucket: "airbe-5a81e.firebasestorage.app",
    messagingSenderId: "652816715532",
    appId: "1:652816715532:web:0e11e643ae9e9eb94b4329",
    measurementId: "G-6X6F6V0B2X"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };