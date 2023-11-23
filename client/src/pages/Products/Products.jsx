import React, { useState, useEffect,useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import jaipur_areas from "./areas";
import "./Products.css";
import StoreContext from "../Home/StoreContext";
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import ShopDetails from "../../components/ShopDetails/ShopDetails";
// import { useHistory } from "react-router-dom"; 

const Products = (props) => {
  const shops = [
    {
      name: "Crossword",
      address:
        "Address: KK Square, 1, C 11, Prithviraj Rd, C Scheme, Jaipur, Rajasthan 302001",
    },
    {
      name: "Universal Books",
      address: "Address: Shop No, 47, M.I.Road, Jaipur – 302001",
    },
    {
      name: "Reader's Hub",
      address:
        "Address: House no 332/7 Shop No 8 Udai Marg, Shanti Path, Raja Park, Jaipur, Rajasthan 302004",
    },
    {
      name: "Rajat Book Corner",
      address:
        "Address: 8, Narayan Singh Rd, Rambagh, Jaipur, Rajasthan 302004",
    },
    {
      name: "Rajat Book Corner",
      address:
        "Address: 8, Narayan Singh Rd, Rambagh, Jaipur, Rajasthan 302004",
    },
    {
      name: "Rajat Book Corner",
      address:
        "Address: 8, Narayan Singh Rd, Rambagh, Jaipur, Rajasthan 302004",
    },
  ];

  const [profiles, setProfiles] = useState([]);

  

  const initialDisplayCount = 15;
  const { storeName } = useContext(StoreContext);

  const [areas, setAreas] = useState(
    jaipur_areas.slice(0, initialDisplayCount)
  );
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());


  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/profiles");
        // Filter the profiles based on the storeName category
        const filteredProfiles = response.data.filter(
          (profile) => profile.category === storeName // Assuming 'category' is a field in your Profile schema
        );
        setProfiles(filteredProfiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
  
    fetchProfiles();
  }, [storeName]);
  const handleViewMore = () => {
    setShowAll(true);
    setAreas(jaipur_areas);
  };

  const handleViewLess = () => {
    setShowAll(false);
    setAreas(jaipur_areas.slice(0, initialDisplayCount));
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredAreas = jaipur_areas.filter((area) =>
      area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setAreas(filteredAreas.slice(0, initialDisplayCount));
    setShowAll(false); // Reset showAll when searching
  };

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = new Set(selectedCheckboxes);
    if (updatedCheckboxes.has(id)) {
      updatedCheckboxes.delete(id);
    } else {
      updatedCheckboxes.add(id);
    }
    setSelectedCheckboxes(updatedCheckboxes);
  };
  console.log(storeName);


//   const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="p-body">
          <div className="left">
            <div className="content">
              <div className="heading">
                <h1>{storeName}</h1>
                <div className="line"></div>
              </div>

              <div className="locations">
                <h1>Locations</h1>
                <div className="body">
                  <div className="search_bar">
                    <input
                      type="text"
                      placeholder="Search for areas..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>

                  <h2>Jaipur</h2>
                  {areas.map((area, index) => (
                    <div className="area" key={index}>
                      <input
                        type="checkbox"
                        id={area}
                        name={area}
                        checked={selectedCheckboxes.has(area)}
                        onChange={() => handleCheckboxChange(area)}
                      />
                      <label htmlFor={area}>{area}</label>
                    </div>
                  ))}
                  {searchTerm === "" &&
                    (!showAll ? (
                      <button onClick={handleViewMore}>View More</button>
                    ) : (
                      <button onClick={handleViewLess}>View Less</button>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="row">
            {profiles.map((profile, index) => (
            <div key={index} className="col-lg-4">
              <Card
                className="card"
                title={profile.shop_name}
                content={profile.address}
                // onClick={() => history.push(`/shop-details/${profile.shop_name}`)}
              />
            </div>
          ))}
              {/* <Card className="col" title={"ayush"} content={"ranwa"}/>
                            <Card className="col" title={"ayush"} content={"ranwa"}/>
                            <Card className="col" title={"ayush"} content={"ranwa"}/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
