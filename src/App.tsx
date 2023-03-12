import React from "react";

import { Route, Routes } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

import LandingPage from "./pages/LandingPage";
import UsersPage from "./pages/UsersPage";

import styles from "./mainpage.module.scss";

function App() {
  return (
    <div className={styles.app__container}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
