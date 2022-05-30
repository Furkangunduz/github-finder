import { useReducer, createContext } from "react";
import AlertReducer from "./AlertReducers";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = {
        message: "",
        type: null,
    };

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (message, type) => {
        dispatch({ type: "SET_ALERT", payload: { message, type } });
        setTimeout(() => {
            dispatch({ type: "CLEAR_ALERT" });
        }, 5000);
    };

    return (
        <AlertContext.Provider value={{ alertState: state, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContext;
