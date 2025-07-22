import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const auth = getAuth();

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      sendEmailVerification(user);
      Alert.alert(
        'Registration Successful',
        'A verification email has been sent to your email address. Please verify your email to continue.',
      );
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
        Alert.alert(error.message);
      }
    });
};

export const loginUser = async (email, password) => {
  // await signInWithEmailAndPassword(auth, email, password)
  //   .then(({ user }) => {
  //     return { emailVerified: user.emailVerified };
  //   })
  //   .catch(error => {
  //     if (error.code === 'auth/invalid-email') {
  //       Alert.alert('Incorrect email address');
  //     } else if (error.code === 'auth/user-not-found') {
  //       Alert.alert('User not found');
  //     } else {
  //       Alert.alert(error.message);
  //     }
  //   });
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return { emailVerified: user.emailVerified };
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      Alert.alert('Incorrect email address');
    } else if (error.code === 'auth/user-not-found') {
      Alert.alert('User not found');
    } else {
      Alert.alert(error.message);
    }
    throw error;
  }
};

export const PasswordReset = async email => {
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      Alert.alert(`reset email sent to ${email}`);
    })
    .catch(error => {
      console.log(error);
    });
};
