import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import fetchData from "../../../../redux/actions";

const BuildingData = (props) => {
  const [price, setPrice] = useState([]);
  const [floor, setFloor] = useState();
  const [bedroom, setBedroom] = useState();
  const [grossm2, setGrossm2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const data = useSelector((state) => {
    return state.data;
  });

  const dispatch = useDispatch();
  // const router = useRouter().asPath;
  // const router = ''
  useEffect(() => {
    dispatch(fetchData());
  
  }, []);
  useEffect(() => {
    filterData();
    
  }, [data]);



  const filterData = () => {
    props.data.map((value) => {
      if (value.prices) {
        let price = value.prices.split("-");
        setPrice(price);
        
      } else if (value.bedroom) {
 
        let bedroom = value.bedroom.split(" ")[0];
     
        setBedroom(bedroom);
        
      } else if (value.floor) {
        let floor = value.floor.split(".")[0];
        setFloor(floor);
   
       
      } else if (value.grossm2) {
        let grossm2 = value.grossm2.split("-");
        setGrossm2(grossm2);
        
      }
    });

    const filteredData = data.filter((filter) => {

      let bedroomToNum = filter.bedroom
        .slice(0, 3)
        .split("+")
        .reduce((pv, cv) => {
          return Number(pv) + Number(cv);
        });
      let floorSplit = filter.floor.split(".")[0];
      let grossm2Tobase = parseInt(filter.grossm2);

      return (
        floor === floorSplit &&
        bedroom == bedroomToNum &&
        (price[0] < filter.price) & (price[1] > filter.price)
      );
    });

    setFilteredData(filteredData);
  };

  return (
    filteredData.length > 0?
    <>
      <div
        style={{
          padding: "2%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filteredData.map((data, i) => {
          return (
            <Link key={i} to={`${data.apartment_id}/detail`}>
              <div
                style={{
                  textAlign: "center",
                  boxShadow: "1px 1px 10px 0.5px gray",
                  backgroundColor: "cyan",
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  color: "gray",
                }}
              >
                <img src="https://picsum.photos/id/1/200/150" />
                <h3>price: INR {data.price}</h3>
                <h5>bedrooms {data.bedroom}</h5>
              </div>
            </Link>
          );
        })}
      </div>
      
    </>:<h1 style={{textTransform:'capitalize'}}> no data exists please try another combination</h1>
  );
};

export default BuildingData;
