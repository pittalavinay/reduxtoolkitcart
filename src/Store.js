import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Cartreducer";
export const Store=configureStore(
    {
        reducer:{
Cartreducer:Cartreducer
        }
    }
)