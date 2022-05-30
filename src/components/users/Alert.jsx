import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const { alertState } = useContext(AlertContext);
    return <strong>{alertState.message}</strong>;
}

export default Alert;
