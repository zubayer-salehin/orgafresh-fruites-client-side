import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import EmailVerificatoin from "../EmailVerification/EmailVerificatoin";

function RequireAuth({ children }) {

    let [user,loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <p className="text-center mt-5 pt-5">loading...</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <EmailVerificatoin></EmailVerificatoin>
    }

    return children;

}

export default RequireAuth;