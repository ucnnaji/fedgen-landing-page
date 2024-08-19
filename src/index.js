import React from "react";
import { createRoot } from "react-dom/client";
import mainLogo from '../src/fedgen-logo.png';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  HashRouter as Router,
  Link,
  Outlet,

  createRoutesFromElements,
} from "react-router-dom";

import News from "./routes/News";
import People from "./routes/People";
import UpcomingEvents from "./routes/UpcomingEvents";
import PublishedArticle from "./routes/PublishedArticle";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>

    <div className="navigate" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={mainLogo} alt="My Local Image" style={{ width: '100px', maxHeight: '80px', maxWidth: '200%'}} />
      <Navbar />
    </div>

    <Outlet />


  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="People" element={<People />} />
        <Route path="PublishedArticle" element={<PublishedArticle />} />
        <Route path="UpcomingEvents" element={<UpcomingEvents />} />
      </Route>
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(<App />);

