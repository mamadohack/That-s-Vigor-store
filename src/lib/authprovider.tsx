"use client"; //

import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";

const store = createStore({
  authName: "__auth",
  authType: "cookie",
  cookieDomain:
    typeof window !== "undefined" ? window.location.hostname : "127.0.0.1"  ,
  cookieSecure: false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider store={store}>{children}</AuthProvider>;
};

export default Providers;
