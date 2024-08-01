import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  getRedirectResult as getRedirectResult$,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

const configs = {
  apiKey: 'AIzaSyDB1T-3r1tAvepwHdmUL70SCSrHaj5z2qI',
  authDomain: 'firebase-auth-x1m9.vercel.app',
  projectId: 'my-project-2-4e46d',
  storageBucket: 'my-project-2-4e46d.appspot.com',
  messagingSenderId: '816833407494',
  appId: '1:816833407494:web:0f92297e208a64cc773187',
  measurementId: 'G-4ZXR2JLC8P',
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
