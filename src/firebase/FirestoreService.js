
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./FirebaseConfig"; 

const db = getFirestore(app);


export const addReservation = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "reservations"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
