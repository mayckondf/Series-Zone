import * as SecureStore from 'expo-secure-store';

export interface IStorageProps {
  key: string;
  value: string;
}

export const getSecureValue = async ({
  key,
}: Pick<IStorageProps, 'key'>): Promise<{
  success: boolean;
  value?: string;
}> => {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    return { success: true, value: JSON.parse(result) };
  }
  return { success: false };
};

export const setSecureValue = async ({
  key,
  value,
}: IStorageProps): Promise<void> => {
  await SecureStore.setItemAsync(key, value);
};

export const removeSecureValue = async ({
  key,
}: Pick<IStorageProps, 'key'>): Promise<void> => {
  await SecureStore.deleteItemAsync(key);
};
