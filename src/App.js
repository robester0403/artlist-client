import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import AroundMePage from "./pages/AroundMePage/AroundMePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import EventCard from "./components/EventCard/EventCard";

import "./app.scss";

function App() {
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [userDate, setUserDate] = useState(0);
  const [eventArr, setEventArr] = useState(null);

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
        <Route path="/explore" element={<ExplorePage userDate={userDate} />} />
        <Route path="/event/:id" element={<EventCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
