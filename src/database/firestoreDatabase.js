import firestore from '@react-native-firebase/firestore';

export const writeData = async users => {
  await firestore()
    .collection('Users')
    .add(users)
    .then(() => {
      console.log('User added!');
    })
    .catch(error => {
      console.log(error);
    });
};
export const readData = async () => {
  try {
    const items = await firestore().collection('Users').get();
    const userDatas = items.docs.map(item => ({
      id: item.id,
      ...item.data(),
    }));
    return userDatas;
  } catch (error) {
    console.log(error.message);
  }
};
export const updateData = async (id, updateDatas) => {
  try {
    await firestore().collection('Users').doc(id).update(updateDatas);
    console.log('update success');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
export const deleteData = async id => {
  try {
    await firestore().collection('Users').doc(id).delete();
    console.log('delete success');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
