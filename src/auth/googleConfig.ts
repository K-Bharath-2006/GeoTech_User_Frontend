import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '471011266346-j38iv7845b9dulf7gq19iqtu524g6hmg.apps.googleusercontent.com',
  });
};
