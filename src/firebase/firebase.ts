import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDAmShujNFxsFEPrPW6ITxTIlem6a-kqP0',
  authDomain: 'geotech-1a29e.firebaseapp.com',
  projectId: 'geotech-1a29e',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
