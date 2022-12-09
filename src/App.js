import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/events/13").then((response) => {
      console.log(response.data.latitude);
      console.log(response.data.longitude);

      setTest(response.data);
    });
  }, []);

  return (
    <>
      <p>this is app</p>
      {/* <p>{`${test.event_name}`}</p> */}
    </>
  );
}

export default App;
