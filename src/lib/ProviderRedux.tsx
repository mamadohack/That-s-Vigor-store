"use client"
import { Provider } from "react-redux";
 
import { NextPage } from 'next';
import store from "@/store";


const ProviderRedux = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux