import React from "react";

import { Route, Routes } from "react-router-dom";
// import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import LandingPage from "./pages/Landing/LandingPage";
import UsersPage from "./pages/Users/UsersPage";

import styles from "./mainpage.module.scss";

function App() {
  return (
    <div className={styles.app__container}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
