import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';
import UserAvatar from '../images/visualtonlogo.png';
import { TonConnectButton } from '@tonconnect/ui-react';


function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-2455555555555555555555555 -mb-px">
          {/* Header: Left side */}
          <div className="flex flex-wrap space-x-3">
            <img className="w-24 h-24 rounded-full" src={UserAvatar} width="32" height="32" alt="User" />
            <div className="title-font font-bold text-slate-800 dark:text-slate-100 mt-5 text-5xl">VisualTON</div>
            <div className="flex flex-wrap items-center space-x-3">
              <button onClick={() => alert("敬請期待")}className="border border-gray-500 dark:border-white-700 text-gray-700 dark:text-[#cccccc] font-bold py-2 px-4 rounded">
                About
              </button>
              <button onClick={() => alert("敬請期待")}className="border border-gray-500 dark:border-white-700 text-gray-700 dark:text-[#cccccc] font-bold py-2 px-4 rounded">
                Contact Us
              </button>
              {/*<ThemeToggle />
              <UserMenu align="right" />*/}
            </div>         
          </div>

          {/* Header: Right side */}
          <div className="flex flex-wrap items-center space-x-3">
            {/* <Link to={"/"} className=" dark:border-white-700 text-gray-700 dark:text-[#cccccc] font-bold py-2 px-4 rounded">Jetton Mockdata</Link> */}
            <Link to={"/current-tx"}className=" dark:border-white-700 text-gray-700 dark:text-[#cccccc] font-bold py-2 px-4 rounded">TON</Link>
            <Link to={"/current-jetton"}className=" dark:border-white-700 text-gray-700 dark:text-[#cccccc] font-bold py-2 px-4 rounded">Jetton</Link>
            <TonConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
