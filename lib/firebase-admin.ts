import "server-only";
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// You should set these in your .env file
const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

let app: App;

if (!getApps().length) {
    app = initializeApp({
        credential: cert(serviceAccount),
    });
} else {
    app = getApps()[0];
}

export const adminAuth = getAuth(app);
