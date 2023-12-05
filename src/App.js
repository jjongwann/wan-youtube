import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Carol = lazy(() => import('./pages/Carol'));
const DreamCoding = lazy(() => import('./pages/DreamCoding'));
const Lofi = lazy(() => import('./pages/Lofi'));
const Inflearn = lazy(() => import('./pages/Inflearn'));
const Codingapple = lazy(() => import('./pages/Codingapple'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main/>}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/today" element={<Today />}/>
          <Route path="/developer" element={<Developer />} />
          <Route path="/carol" element={<Carol />} />
          <Route path="/dreamCoding" element={<DreamCoding />} />
          <Route path="/lofi" element={<Lofi />} />
          <Route path="/inflearn" element={<Inflearn />} />
          <Route path="/Codingapple" element={< Codingapple />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App