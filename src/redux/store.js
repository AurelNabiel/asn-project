// store.js

import { configureStore } from '@reduxjs/toolkit';
import { activeHash } from './actions';

export const store = configureStore({
    reducer: {
      data: activeHash.reducer,
    },
  });
  


