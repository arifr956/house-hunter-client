import { useContext } from "react";
import { CentralContext } from "../providers/AuthProvider";



const useAuth = () => {
    const auth = useContext(CentralContext);
    return auth;
};

export default useAuth;