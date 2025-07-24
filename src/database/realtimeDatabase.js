import database from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const writeData = async users => {
  try {
    await database().ref('/users').push(users);
    Alert.alert('User add success');
  } catch (error) {
    Alert.alert(error.message);
  }
};
export const readData = async () => {
  try {
    const items = await database().ref(`/users`).once('value');
    const getdata = items.val()
      ? Object.entries(items.val()).map(([id, data]) => ({
          id,
          ...data,
        }))
      : [];
    return getdata;
  } catch (error) {
    Alert.alert(error.message);
  }
};
export const updateData = async (id, users) => {
  try {
    await database().ref(`/users/${id}`).update(users);
    Alert.alert('User update success');
  } catch (error) {
    Alert.alert(error.message);
  }
};
export const deleteData = async id => {
  try {
    await database().ref(`/users/${id}`).remove();
    Alert.alert('User delete success');
  } catch (error) {
    Alert.alert(error.message);
  }
};
