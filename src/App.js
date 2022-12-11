import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import AroundMePage from "./pages/AroundMePage/AroundMePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

import "./app.scss";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";

function App() {
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [userDate, setUserDate] = useState(0);
  const [eventArr, setEventArr] = useState(null);

  useEffect(() => {
    setUserLatitude(JSON.parse(window.localStorage.getItem("userLatitude")));
    setUserLongitude(JSON.parse(window.localStorage.getItem("userLongitude")));
    // setUserDate(JSON.parse(window.localStorage.getItem('userLongitude')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userLatitude", userLatitude);
    window.localStorage.setItem("userLongitude", userLongitude);
  }, []);

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
        <Route path="/event/:id" element={<EventDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
