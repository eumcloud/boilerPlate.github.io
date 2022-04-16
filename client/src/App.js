import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/common/Index';
import MyPage from './pages/mypage/MyPage'; // 마이페이지 거래소버전 (기존경로 : ./components/pages/Mypage)
import SignIn from './pages/signIn/SignIn';
import SignUp from "./pages/signUp/SignUp";
// import Reference from "./pages/Reference";

function App() {
  return (
    <>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </header>
      <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="*" element={<Main />} />
      </Routes>
    
    </>
  );
}

export default App;
