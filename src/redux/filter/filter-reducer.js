import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./filter-action";

const filterReducer = createReducer('',{
    [setFilter]: (_, {payload})=> payload,
});

export default filterReducer;