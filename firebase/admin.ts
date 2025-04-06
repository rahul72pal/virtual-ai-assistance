import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth"; // Use firebase-admin/auth
import { getFirestore } from "firebase-admin/firestore"; // Import Firestore from firebase-admin/firestore

const initFirebaseAdmin = () => {
    const apps = getApps();

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            })
        });
    }

    return {
        auth: getAuth(),
        db: getFirestore() // This will now work correctly
    };
};

export const { auth, db} = initFirebaseAdmin();