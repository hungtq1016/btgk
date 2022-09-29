// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ref,onUnmounted } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk_w6lWFcHu8nxLAx6Bk-7on6Ow3li4Ac",
  authDomain: "gym-shop-f7a76.firebaseapp.com",
  projectId: "gym-shop-f7a76",
  storageBucket: "gym-shop-f7a76.appspot.com",
  messagingSenderId: "638419243955",
  appId: "1:638419243955:web:f31f9dd5f77c8ee920b1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = db.collection('products')

export const productLoader = () =>{
  const product = ref([]);
  const close = productsCollection.onSnapshot(snapshot =>{
    product.value = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
  })
  onUnmounted(close);
  return product
}