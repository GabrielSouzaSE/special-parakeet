import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBecs6iXxy0Op-erKD2JPHe07_9AmT0ghc",
    authDomain: "condniver.firebaseapp.com",
    projectId: "condniver",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)