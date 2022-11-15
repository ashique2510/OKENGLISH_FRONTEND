import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux-toolkit/auth/authSlice'
import avatarReducer from '../redux-toolkit/reducer/avatarReducer';
import contactReducer from '../redux-toolkit/reducer/contactReducer';
import sendMessageReducer from '../redux-toolkit/reducer/sendMessageReducer';
import getMessagesReducer from '../redux-toolkit/reducer/getMessagesReducer';
import planSliceReducer from '../redux-toolkit/reducer/bookingReducer';
import globalSliceReducer from '../redux-toolkit/reducer/globalReducer';
import getTutorInfoReducer  from '../redux-toolkit/reducer/tutorReducer'


export const store = configureStore({
  reducer: {
       auth: authReducer,
       avatarInfo:avatarReducer,
       contactInfo: contactReducer,
       sendMsgInfo:sendMessageReducer,
       getMsgInfo:getMessagesReducer,
       choosedPlan:planSliceReducer,
       globalData:globalSliceReducer,
       tutorInfo:getTutorInfoReducer
  },
});
