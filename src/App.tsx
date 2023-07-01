import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}