import React from "react";
import { useSettings } from "../../../hooks/settings-hook";
import { checkLogin, Login, logout } from "../../../api";

export const LoginMenu: React.FC = () => {
  const settings = useSettings();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div className="flex flex-col p-8 bg-white">
      <button
        onClick={async () => {
          console.log(await checkLogin());
        }}
        className="p-8"
      >
        Check Login
      </button>
      <button
        onClick={async () => {
          console.log(await logout());
        }}
        className="p-8"
      >
        Logout
      </button>
      <div className="flex flex-col m-auto p-4 bg-Theme rounded-xl text-white w-1/4">
        Email
        <input
          className="rounded my-2 text-Theme"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        Password
        <input
          className="rounded my-2 text-Theme"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      <button
        onClick={async () => {
          console.log(await Login(email, "TestPassword"));
        }}
        className="p-8"
      >
        Login
      </button>
    </div>
  );
};
