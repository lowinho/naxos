import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'ESTUDIO-197',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};
