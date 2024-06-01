import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import MainPage from './pages/mainPage';
import Footer from "./components/footer.jsx";
import Header from './partials/Header';
import {RecoilRoot} from 'recoil';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

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
          <Route path="/" element={<MainPage/>} />
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
