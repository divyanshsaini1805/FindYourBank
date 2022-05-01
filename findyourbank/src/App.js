import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { PaginatedTable } from "./components/PaginatedTable";
import Header from "./ui/Header";
import Utilities from "./components/Utilities";
import DisplayIndividualBank from "./components/DisplayIndividualBank";
import Favorites from "./components/Favorites";
import Errors from "./components/Errors";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("MUMBAI");
  const [errors, setErrors] = useState('');


  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const res = await axios(
        `https://vast-shore-74260.herokuapp.com/banks?city=${query}`
      ).catch((e)=>{
      setErrors(e.message)
      setLoading(false)
      })
      setData(res.data);
      setLoading(false);
    };

    fetchdata();
  }, [query]);

  return (
    <>
      <Router>
        <Header />
        <Utilities data={data} getQuery={(q) => setQuery(q)} />
        {errors && <div>{errors}</div>}
        <Routes>
          <Route
            path="/"
            element={<PaginatedTable data={data} isLoading={isLoading} />}
          ></Route>
          <Route
            path="/banks/:ifsc_code"
            element={<DisplayIndividualBank />}
          ></Route>
          {/* <Route path="/favorites" element ={<Favorites />}></Route> */}
          {/* <Route path="/errors" element ={<Errors />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
