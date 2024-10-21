import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Action1 from './components/Action1';
import Detail from './components/Detail';
import DetailPage from './components/DetailPage';
import Homepage from './components/Homepage/Homepage';
import BuisnessSignin from './components/LoginSignin/BuisnessSignin';
import SignIn from './components/LoginSignin/SignIn';
import SignInEmailPass from './components/LoginSignin/SignInEmailPass';
import SignUp from './components/LoginSignin/SignUp';
import SignUpWithEmail from './components/LoginSignin/SignUpWithEmail';
import VerifyForBuisness from './components/LoginSignin/VerifyForBuisness';
import VerifyForEmailSignin from './components/LoginSignin/VerifyForEmailSignin';
import PdfPage from './components/PdfPage';
import TemplatePage from './components/TemplatePage';

const App = () => {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignInEmailPass" element={<SignInEmailPass />} />
          <Route path="/SignUpWithEmail" element={<SignUpWithEmail />} /> 
          <Route path="/BuisnessSignin" element={<BuisnessSignin />} /> 
          <Route path="/VerifyForBuisness" element={<VerifyForBuisness />} /> 
          <Route path="/VerifyForEmailSignin" element={<VerifyForEmailSignin />} /> 
          <Route path="/PDF-T" element={<PdfPage />} />
          <Route path="/TemplatePage" element={<TemplatePage />} />
          <Route path='/Action1' element={<Action1 />} />
          <Route path='/DetailPage' element={<DetailPage />} />
          <Route path='/Details' element={<Detail />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
