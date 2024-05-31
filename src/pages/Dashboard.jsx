import React, { useState } from 'react';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Bars from '../partials/dashboard/Bars';

import CurrentTransaction from './CurrentTxGraph';
import MockGraph from './mockGraph';
function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        

        <main className='main min-h-screen'>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />
            <Bars />
            {/* Cards */}
            <div className="">

              {/* Line chart (Acme Plus) */}
              <MockGraph/>
              <CurrentTransaction/>
            </div>

          </div>
        </main>
        
      </div>
    </div>
  );
}

export default Dashboard;