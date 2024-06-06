// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzFwjSBsq6G5ij0MWWSkVU84v2HGaZXc8",
  authDomain: "cart-react-gastontermine.firebaseapp.com",
  projectId: "cart-react-gastontermine",
  storageBucket: "cart-react-gastontermine.appspot.com",
  messagingSenderId: "690105656917",
  appId: "1:690105656917:web:269913c06c32ffd4c256dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function getProducts(){
  const response = await getDocs(collection(db,"listOfProducts"));

  const listaProducs=[];
  response.forEach((docu) => listaProducs.push({id:docu.id, ...docu.data()}))
  return listaProducs;
}

/* enviar una nueva orden de pedido */
export async function addOrder(order){
  const ordersConllection = collection(db, "orders")
  const docRef = await addDoc(ordersConllection, order)

  return docRef.id;
}

