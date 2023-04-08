/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import trashService from "./trashService";

const initialState = {
  request: [],
  oneRequest: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create new request
export const createTrash = createAsyncThunk(
  "trash/create",
  async (trashData, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth.user;
      return await trashService.createTrash(trashData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// delete new trash
export const deleteTrash = createAsyncThunk("trash/delete", async (id, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().auth.user;
    return await trashService.deleteTrash(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
// gettt one trashh
export const getOneTrash = createAsyncThunk("trash/getOne", async (id, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().auth.user;
    return await trashService.getOneTrash(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
/// get alll trash
export const getTrash = createAsyncThunk("trash/getAll", async (thunkAPI) => {
  try {
    return await trashService.getTrash();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
// search trash
export const searchTrash = createAsyncThunk(
  "trash/search",
  async (searchQuery, thunkAPI) => {
    try {
      return await trashService.searchTrash(searchQuery);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const trashSlice = createSlice({
  name: "trash",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTrash.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrash.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request.push(action.payload);
      })
      .addCase(createTrash.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTrash.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrash.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = action.payload;
      })
      .addCase(getTrash.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTrash.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTrash.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = state.request.filter(
          (request) => request._id !== action.payload.id
        );
      })
      .addCase(deleteTrash.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(searchTrash.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchTrash.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = action.payload;
      })
      .addCase(searchTrash.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getOneTrash.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneTrash.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.oneRequest = action.payload;
      })
      .addCase(getOneTrash.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = trashSlice.actions;
export default trashSlice.reducer;
