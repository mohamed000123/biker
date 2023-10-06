import { Routes, Route, useNavigate } from "react-router-dom";
// pages
import Home from "../pages/home";
import YourParcels from "../pages/yourParcels";
import AvailableParcels from "../pages/availableParcels";
// components
import NotFound from "./notFound";
import Nav from "./nav";
//react
import { useEffect } from "react";

const Main = () => {
  //  protecting routes
  const navigate = useNavigate();
  useEffect(() => {
    if (!document.cookie) {
      navigate("/login");
    }
  }, []);
  //
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/parcels"
          element={
            <>
              <Nav />
              <YourParcels />
            </>
          }
        ></Route>
        <Route
          path="/available"
          element={
            <>
              <Nav />
              <AvailableParcels />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Main;
