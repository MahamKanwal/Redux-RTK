                    // userSlice.js
import { createCrudSlice } from "../createCrudSlice";
import { apiUrl } from "../../Api";

 export const {reducer: userReducer, actions: userActions} = createCrudSlice("users", `${apiUrl}/users`);


