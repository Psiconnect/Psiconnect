import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllProfessional: [],
  FilterProfessional: [],
};

const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    setAllProfessional(state, { payload }) {
      state.AllProfessional = payload;
    },
    setFilterProfessional(state, { payload }) {
      state.FilterProfessional = payload;
    },
    orderProfessionalsByPrice(state, {payload}) {
      state.FilterProfessional =
        payload === "desc"
          ? state.FilterProfessional?.sort((a, b) => b.price - a.price)
          : state.FilterProfessional?.sort((a, b) => a.price - b.price) 
    },
    orderProfessionalsByCalification(state, {payload}) {
      state.FilterProfessional =
        payload === "desc"
          ? state.FilterProfessional?.sort((a, b) => b.score - a.score)
          : state.FilterProfessional?.sort((a, b) => a.score - b.score)
    },
  },
});
export const { 
  setAllProfessional,
  setFilterProfessional,
  orderProfessionalsByPrice,
  orderProfessionalsByCalification,
} = professionalSlice.actions;
export default professionalSlice.reducer;
