import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  getRedirectResult as getRedirectResult$,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

const configs = {
  apiKey: "AIzaSyCJR2EJd-L5ZK0kCiMEg8R6b2TKQAavwVY",
  authDomain: "authentication-5b733.firebaseapp.com",
  projectId: "authentication-5b733",
  storageBucket: "authentication-5b733.appspot.com",
  messagingSenderId: "342176075234",
  appId: "1:342176075234:web:68dc08402e84a37b10bdbb"
};

const app = getApps()?.length > 0 ? getApp() : initializeApp(configs);
export const auth = getAuth(app);

const providerParameters = {
  prompt: 'select_account',
};

const googleProvider = new GoogleAuthProvider().setCustomParameters(
  providerParameters,
);

const loginWithProvider = (provider) => signInWithRedirect(auth, provider);

export const loginWithGoogle = () => loginWithProvider(googleProvider);
export const getRedirectResult = () => getRedirectResult$(auth);
