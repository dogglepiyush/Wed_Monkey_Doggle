import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Action1 from './components/Action1';
import Detail from './components/Detail';
import DetailPage from './components/DetailPage';
import Homepage from './components/Homepage';
import BuisnessSignin from './components/LoginSignin/BuisnessSignin';
import SignIn from './components/LoginSignin/SignIn';
import SignInEmailPass from './components/LoginSignin/SignInEmailPass';
import SignUp from './components/LoginSignin/SignUp';
import SignUpWithEmail from './components/LoginSignin/SignUpWithEmail';
import VerifyForBuisness from './components/LoginSignin/VerifyForBuisness';
import VerifyForEmailSignin from './components/LoginSignin/VerifyForEmailSignin';
import PdfPage from './components/PdfPage';
import TemplatePage from './components/TemplatePage';
import VideoPage from './components/VideoPage';
import VideoTemplatePage from './components/VideoTemplatePage';
import VideoTemplateDetail from './components/VideoTemplateDetail';

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
          <Route path="/pdfpage" element={<PdfPage />} />
          <Route path="/templatepage" element={<TemplatePage />} />
          <Route path='/action1' element={<Action1 />} />
          <Route path='/pdfdetailpage' element={<DetailPage />} />
          <Route path='/details' element={<Detail />} />


          {"video Routes"}
          <Route path='/videopage' element={<VideoPage />} />
          <Route path="/videotemplatepage" element={<VideoTemplatePage />} />
          <Route path='/videotemplatedetail' element={<VideoTemplateDetail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
