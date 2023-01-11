import { StyleSheet, Text, View } from "react-native";
import React, { FC, PropsWithChildren } from "react";

const Context = React.createContext({});

const StartVisitingContext: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default StartVisitingContext;

const styles = StyleSheet.create({});
