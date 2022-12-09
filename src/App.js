import { useEffect, useState } from "react";
import axios from "axios";
const { point } = require("@turf/helpers");
const distance = require("@turf/distance").default;

function App() {
  const [test, setTest] = useState(null);

  // console.log(result);

  useEffect(() => {
    axios.get("http://localhost:8080/api/events/13").then((response) => {
      let longitude = response.data.longitude;
      let latitude = response.data.latitude;
      const from = point([longitude, latitude]);
      const to = point([-79.3901, 43.6469]);
      const options = { units: "kilometers" };
      const result = distance(from, to, options);
      setTest(result);
    });
  }, []);

  return (
    <>
      <p>this is app</p>
      <p>{`${test}`}</p>
    </>
  );
}

export default App;
