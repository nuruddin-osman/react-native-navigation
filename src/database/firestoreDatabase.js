import firestore from '@react-native-firebase/firestore';

export const writeData = users => {
  firestore()
    .collection('Users')
    .add(users)
    .then(() => {
      console.log('User added!');
    });
};
