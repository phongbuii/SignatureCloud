import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = {
  LANGUAGE: '@LANGUAGE',
};

function save(key, value) {
  AsyncStorage.setItem(key, value);
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
function saveObject(key, value) {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

async function get(key) {
  return AsyncStorage.getItem(key);
}

async function remove(key) {
  return AsyncStorage.removeItem(key);
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
async function getObject(key) {
  const value = await AsyncStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else return null;
}

// async function setMultiObject(keyValuePairs) {
//   return AsyncStorage.multiSet(keyValuePairs)
// }

async function getMultiObject(listkey, func) {
  return AsyncStorage.multiGet(listkey, func);
}

async function removeMultiObject(listkey) {
  return AsyncStorage.multiRemove(listkey);
}

async function multiRemove(keys) {
  return AsyncStorage.multiRemove(keys);
}

async function multiSet(keyValuePairs) {
  AsyncStorage.multiSet(keyValuePairs);
}

async function multiGet(keys, func) {
  return AsyncStorage.multiGet(keys, func);
}

const AsyncStorageUtils = {
  save,
  saveObject,
  get,
  getObject,
  remove,
  KEY,
  // setMultiObject,
  getMultiObject,
  removeMultiObject,
  multiGet,
  multiSet,
  multiRemove,
};
export default AsyncStorageUtils;
