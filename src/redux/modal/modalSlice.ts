import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface ModalState {
  showCreateVehicle: boolean;
}
const initialState: ModalState = {
  showCreateVehicle: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setShowCreateVehicle: (state, action: PayloadAction<boolean>) => {
      state.showCreateVehicle = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {setShowCreateVehicle} = modalSlice.actions;
