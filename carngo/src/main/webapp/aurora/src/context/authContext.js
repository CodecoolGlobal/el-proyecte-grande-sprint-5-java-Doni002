import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ userData, children }) => {
    let [user, setUser] = useState(userData);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

/*
export const ProtectedRoute = ({..rest }) => {
    let { user } = useAuth();

    if (!user || !user.token || user.token === "") {
        return (
            // component which inform the user that they must be logged in
        );
    }

    // let user through if they're logged in
    return <Route {..rest} />;
};*/
