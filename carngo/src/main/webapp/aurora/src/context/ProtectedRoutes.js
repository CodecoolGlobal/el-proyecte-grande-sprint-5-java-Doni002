import AuthContext from "./authContext";
import {useContext} from "react";

export const ProtectedRoute = ({children, allowedRole }) => {
    let { user } = useContext(AuthContext);

    if (!user || !user.accessToken || user.accessToken === "") {
 //add code //
    }
    return children;
};