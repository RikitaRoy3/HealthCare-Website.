import express from 'express';

import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Medicare from "./pages/Medicare";
import PathoLab from "./pages/PathoLab";
import NotFound from "./pages/NotFound";
import Doctors from "./pages/Doctors";
import Hospital from "./pages/Hospital";
import Ambulance from "./pages/Ambulance";
import Support from "./pages/Support";




const router = express.Router();


  router.post('/signup',SignUp);
  router.post('/login',Login);
  router.post('/medicare',Medicare);
  router.post('/pathocare',PathoLab);
  router.post('/doctors',Doctors);
  router.post('/hospital',Hospital);
  router.post('/ambulance',Ambulance);

  router.post('/support',Support);
  router.get('/',Index);
  router.all('*',NotFound);


export default router;