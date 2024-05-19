import React from "react";
import { Footer } from "../Footer";
import { NavBar } from "../navBar";
import { LoginMenu } from "./LoginMenu";
export const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-Secondary	h-screen">
      <NavBar />
      <LoginMenu />
      <Footer />
    </div>
  );
};
