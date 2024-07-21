import { useEffect, useState } from "react";
import { Axios } from "./api/Axios.ts";

function App() {
  const [foodData, setFoodData] = useState();

  const fetchData = async () => {
    const response = await Axios.get("/COOKRCP01/json/1/1");
    setFoodData(response.data.COOKRCP01.row[0].RCP_NM);
  };

  useEffect(() => {
    fetchData();
  }, [foodData]);

  return <div>{foodData}</div>;
}

export default App;
