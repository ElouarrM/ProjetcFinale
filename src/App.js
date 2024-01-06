import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterComponent from "../src/screens/RegisterComponent";
import Authentificate from "../src/screens/Authentificate";
import SendTransferScreen from "../src/screens/SendTransferScreen";
import TransferForm from "../src/screens/TransferForm";
import GetAllTransfert from "../src/screens/GetAllTransfert";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import GetALLTransfert from "../src/screens/GetAllTransfert";
import { Modal } from "react-bootstrap";
import GetAllUsers from "./screens/GetAllUsers";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Authentificate />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/Getalltransfert" element={<GetAllTransfert />} />
      <Route path="/SendTransfert" element={<SendTransferScreen />} />
      <Route path="/transfertForm" element={<TransferForm />} />
      <Route path="/Getalluser" element={<GetAllUsers />} />





    </Routes>
  </Router>
  );
};  

export default App;
