import React from "react";
import { Route, Routes  } from "react-router";
import {BrowserRouter } from "react-router-dom";
import { Header, Footer, Main } from "../../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default MainLayout;
