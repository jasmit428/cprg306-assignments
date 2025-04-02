import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

//fetch item
export const getItems = async (userId) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const snapshot = await getDocs(query(itemsRef));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

//add new item for specific user
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};
