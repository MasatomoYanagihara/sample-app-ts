import '@/plugins/composition-api';
import { reactive } from '@vue/composition-api';
import { Profile } from '@/store/profile.model';
import { update } from '@/store/shared-user';
import axios from 'axios';

export const profileStore = reactive({ profile: null as Profile | null });

/**
 * ユーザー名を更新します。
 * @param userName ユーザー名
 */
export const updateUserNameAsync = async (userName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const profile = profileStore.profile!;
  const data = { userName: userName };

  // eslint-disable-next-line no-useless-catch
  try {
    await axios.patch('profile', data);
    profile.userName = userName;
    update(profile);
  } catch (error) {
    throw error;
  }
};

/**
 * ニックネームを更新します。
 * @param nickname ニックネーム
 */
export const updateNickname = (nickname: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.nickname = nickname;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};

/**
 * テーマカラーを更新します。
 * @param themeColor テーマカラー
 */
export const updateThemeColor = (themeColor: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.themeColor = themeColor;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};

/**
 * サインインします。
 */
// axiosを使用
export const signInAsync = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get<Profile>('profile');
    profileStore.profile = response.data;
  } catch (error) {
    throw error;
  }
};

// fetchを使用
// export const signInAsync = async () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8',
//     },
//   };

//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await fetch('/api/profile', options);
//     if (response.ok) {
//       profileStore.profile = await response.json();
//       return;
//     }
//     throw new Error('response was not ok.');
//   } catch (error) {
//     throw error;
//   }
// };
