import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages

import MockGraph from './pages/mockGraph';
import MockJettonGraph from './pages/mockJettonGraph';
import CurrentTransaction from './pages/CurrentTxGraph';
import CurrentJettonTransaction from './pages/CurrentJettonGraph';
import Footer from "./components/footer.jsx";
import Header from './partials/Header';
import WelcomeBanner from './partials/dashboard/WelcomeBanner';
import {RecoilRoot} from 'recoil';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Address } from './components/Address.jsx';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <TonConnectUIProvider manifestUrl="http://localhost:5173/tonconnect-manifest.json">
      <RecoilRoot>
        <Header sidebarOpen={false} setSidebarOpen={() => { }} />
        {/* <WelcomeBanner/> */}
        {/* <div className='space'>
        </div> */}
      {/* <Routes>
        <Route exact path="/" element={<MockJettonGraph />} />
      </Routes> */}
      <Routes>
          <Route path="/" element={<CurrentTransaction />} />
      </Routes>
      <Routes>
        <Route exact path="/current-jetton" element={<CurrentJettonTransaction />} />
      </Routes>
      <Footer/>
      </RecoilRoot>
    </TonConnectUIProvider>
  );
}

export default App;
