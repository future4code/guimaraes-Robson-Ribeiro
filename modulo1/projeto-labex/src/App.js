import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "./components/pages/AdminPage";

import ApplicationFormPage from "./components/pages/ApplicationFormPage";
import CreateTripPage from "./components/pages/CreateTripPage";
import HomePage from "./components/pages/HomePage";
import ListTripsPage from "./components/pages/ListTripsPage";
import LoginPage from "./components/pages/LoginPage";
import TripDetailsPage from "./components/pages/TripDetailsPage";


import "./App.css"
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;