import React from "react";
import Logo from "./fullLogo.png";
import { useSettings } from "../../hooks/settings-hook";
import { checkLogin, logout } from "../../api";
export function NavBar(): JSX.Element {
  const Settings = useSettings();
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  React.useEffect(() => {
    const getStatus = async () => {
      setLoggedIn((await checkLogin()).login);
    };
    getStatus();
  }, [loggedIn]);

  return (
    <nav
      className="sticky top-0 bg-Theme border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-30 bg-opacity-90 backdrop-blur "
      id="NavBar"
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto text-Secondary">
        <a href="/" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
            {Settings?.General.Name}
          </span>
        </a>

        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li>
            <a href="/menu" aria-current="page">
              {Settings?.Words.Menu}
            </a>
          </li>
          {Settings?.Links.Takeout && (
            <li>
              <a href={Settings.Links.Takeout} aria-current="page">
                {Settings?.Words.Takeout}
              </a>
            </li>
          )}
          {Settings?.Links.Reservations && (
            <li>
              <a href={Settings?.Links.Reservations} aria-current="page">
                {Settings?.Words.Reservations}
              </a>
            </li>
          )}
          {Settings?.General.PhoneNumber && (
            <li>
              <a href={Settings?.General.PhoneNumber} aria-current="page">
                {Settings?.General.PhoneNumber}
              </a>
            </li>
          )}
          {loggedIn && (
            <li
              onClick={async () => {
                setLoggedIn(!(await logout()).login);
              }}
            >
              {Settings?.Words.LogOut}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
