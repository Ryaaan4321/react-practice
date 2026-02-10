import { configureStore } from "@reduxjs/toolkit";
import countReducer from "@/redux/countslice.js"
import todoReducer from "@/redux/todoslice.js"
import { saveTodoMiddleware,loggerMiddleware } from "./loggerMiddleware";
export const store=configureStore({
    reducer:{
        count:countReducer,
        todo:todoReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(loggerMiddleware,saveTodoMiddleware)
})