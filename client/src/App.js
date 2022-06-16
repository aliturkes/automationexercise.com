import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Page404 from './components/Page404';
import Admin from './components/admin/Admin';
import Dealer from './components/dealer/Dealer';
import Header from './components/Header';
import PasswordReset from './components/auth/PasswordReset';
import './App.css';




export default function App() {
  return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="password-forgot" element={<PasswordReset />} />

          <Route path="admin/*" element={<Admin />} />
          <Route path="dealer/*" element={<Dealer />} />

          <Route path="*" element={<Page404 />} />

        </Routes>

      </BrowserRouter>
  );
}