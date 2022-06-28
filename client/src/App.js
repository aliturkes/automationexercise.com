import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Page404 from './components/Page404';
import Admin from './components/admin/Admin';
import Company from './components/company/Company';
import Header from './components/Header';
import PasswordReset from './components/auth/PasswordReset';
import './App.css';
import PasswordChange from './components/auth/PasswordChange';



export default function App() {
  return (
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="reset-password" element={<PasswordReset />} />
          <Route path="change-password" element={<PasswordChange />} />

          <Route path="admin/*" element={<Admin />} />
          <Route path="company/*" element={<Company />} />

          <Route path="*" element={<Page404 />} />

        </Routes>

      </BrowserRouter>
  );
}