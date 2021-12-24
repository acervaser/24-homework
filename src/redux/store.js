import {createStore} from "redux";
import { addPost } from "./reducer";

export const store = createStore(addPost);