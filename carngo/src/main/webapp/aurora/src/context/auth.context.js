import React from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ userData, children }) => {
    let [user, setUser] = React.useState(userData);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);

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
