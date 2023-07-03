import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/Home/Home';
import { Draw } from './pages/Draw/Draw';

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<Draw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}