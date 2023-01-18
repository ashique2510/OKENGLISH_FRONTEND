import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const host = 'https://ruby-jolly-hippopotamus.cyclic.app';

const API_URL = `${host}/api/users/setavatar`;

export const getAvatarInfo = createAsyncThunk('api/avatarInfo', (info) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const accessToken = user.token;

  return axios
    .post(
      `${API_URL}/${user._id}`,
      { image: info },
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    .then((response) => {
      return response.data;
    });
});

const avatarInfoSlice = createSlice({
  name: 'avatar',
  initialState: {
    data: [],
    error: '',
    loading: false,
  },

  extraReducers: {
    [getAvatarInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.avatarData = action.payload;
    },
    [getAvatarInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [getAvatarInfo.rejected]: (state, action) => {
      state.loading = false;
      state.error = 'Some error occured';
    },
  },
});

export default avatarInfoSlice.reducer;
