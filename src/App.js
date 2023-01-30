import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import AroundMePage from "./pages/AroundMePage/AroundMePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import OrganizationPage from "./pages/OrganizationPage/OrganizationPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import VenuePage from "./pages/VenuePage/VenuePage";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";
import "./app.scss";

function App() {
  // these states should be managed in the components
  // the routing and state logic should be different layers of abstraction
  // slightly confusing that you have the parse here inline, consider exporting to a utils or constants file.
  const [userLatitude, setUserLatitude] = useState(
    JSON.parse(sessionStorage.getItem("userLatitude")) || 0
  );
  const [userLongitude, setUserLongitude] = useState(
    JSON.parse(sessionStorage.getItem("userLongitude")) || 0
  );
  const [userDate, setUserDate] = useState(
    JSON.parse(sessionStorage.getItem("userDate")) || "0000-00-00"
  );
  const [eventArr, setEventArr] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [genre, setGenre] = useState(null);
  const [venue, setVenue] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setUserLatitude={setUserLatitude}
              setUserLongitude={setUserLongitude}
              setUserDate={setUserDate}
            />
          }
        />
        <Route
          path="/aroundme"
          element={
            <AroundMePage
              userLatitude={userLatitude}
              userLongitude={userLongitude}
              userDate={userDate}
              setEventArr={setEventArr}
              eventArr={eventArr}
            />
          }
        />
        <Route
          path="/explore"
          element={
            <ExplorePage
              userDate={userDate}
              setEventArr={setEventArr}
              eventArr={eventArr}
            />
          }
        />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route
          path="/organization/:id"
          element={
            <OrganizationPage
              organization={organization}
              setOrganization={setOrganization}
              userDate={userDate}
              setEventArr={setEventArr}
              eventArr={eventArr}
            />
          }
        />
        <Route
          path="/genre/:id"
          element={
            <GenrePage
              genre={genre}
              setGenre={setGenre}
              userDate={userDate}
              setEventArr={setEventArr}
              eventArr={eventArr}
            />
          }
        />
        <Route
          path="/venue/:id"
          element={
            <VenuePage
              venue={venue}
              setVenue={setVenue}
              userDate={userDate}
              setEventArr={setEventArr}
              eventArr={eventArr}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
