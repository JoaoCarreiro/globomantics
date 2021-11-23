import Header from "./components/header";
import logo from "./logo.svg";
import "./main-page.css";
import { useEffect, useState } from "react";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);
  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world" />
    </div>
  );
}

export default App;
