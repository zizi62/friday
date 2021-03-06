import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from "./profileReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { setNewPasswordReducer } from "./setNewPasswordReducer";
import { signInReducer } from "./signInReducer";
import { ziziPacksReducer } from "./ziziPacksReducer";
import { ziziCardsReducer } from "./ziziCardsReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    forgotPasswordPage: forgotPasswordReducer,
    registrationPage: registrationReducer,
    setNewPasswordPage: setNewPasswordReducer,
    signInPage: signInReducer,
    tablePakcsPage: ziziPacksReducer,
    tableCardsReducer: ziziCardsReducer
    
})

export type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store;