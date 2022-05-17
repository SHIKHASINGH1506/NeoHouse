import { authReducer } from 'features';
import { postReducer, postModalReducer, editProfileModalReducer } from 'features';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer:{
    auth: authReducer,
    post: postReducer,
    postModal: postModalReducer,
    editProfileModal: editProfileModalReducer
  }
}) 