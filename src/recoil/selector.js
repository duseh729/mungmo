// // selectors.js
// import { selector } from 'recoil';
// import { dogInfoState } from './dog';
// import { fetchUserData } from '../apis/api/user';

// export const dogInfoSelector = selector({
//   key: 'dogInfoSelector',
//   get: async ({ get }) => {
//     try {
//       const data = await fetchUserData();
//       return data.data.pet; // 서버에서 받은 데이터 중 필요한 부분만 반환
//     } catch (error) {
//       throw error;
//     }
//   },
// });
