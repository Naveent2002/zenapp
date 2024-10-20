import React from 'react';
import { auth } from './firebase';
import firebase from 'firebase/app';

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
