
import Index from "./pages/Index.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import Medicare from "./pages/Medicare.tsx";
import PathoLab from "./pages/PathoLab.tsx";
import NotFound from "./pages/NotFound.tsx";
import Doctors from "./pages/Doctors.tsx";
import Hospital from "./pages/Hospital.tsx";
import Ambulance from "./pages/Ambulance.tsx";
import Support from "./pages/Support.tsx";

import { Routes, Route } from 'react-router-dom';
import React from 'react'

const App = () => {
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/medicare" element={<Medicare />} />
    <Route path="/pathocare" element={<PathoLab />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/hospital" element={<Hospital />} />
    <Route path="/ambulance" element={<Ambulance />} />
    <Route path="/support" element={<Support />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
}

export default App

