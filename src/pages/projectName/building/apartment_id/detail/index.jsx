import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Detail = () => {
  const buildingData = useSelector((state) => state.data);
  let {apartment_id} = useParams()
  const [filteredData,setFilteredData] = useState([])

 useEffect(()=>{
   filterApartment()
 },[])

  const filterApartment = ()=>{
    let Obj = {}

      let filteredAptrmt = buildingData.filter((data)=>{
        
          return data.apartment_id === apartment_id

      })  
      Object.entries(filteredAptrmt[0]).map(([key,val],i)=>{



           if (val !== '') {
            Obj = {...Obj,[key]:val}
           }
        })
      console.log(filteredAptrmt);
      setFilteredData(Obj)
  }
  return (
    <>
      <div
        style={{
          padding: "2%",
          display: "flex",
          flexWrap:'wrap',
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px", 
          justifyItems:'center'
        }}
      >
          <h1>DETAILS</h1>
            <div
              style={{
                  display:'flex',
                  flexDirection:'column',
                textAlign: "center",
                width: "100%",
                color: "gray",
              }}
            >
              {Object.entries(filteredData).map(([key, val], i) => {
                return (
                  <div style={{display:'flex'}} key={i}>
                    <h3 style={{color:'InfoText'}}>{key} :</h3>
                    <h3 style={{color:'Highlight'}}>{val}</h3>
                  </div>
                );
              })}
            </div>
          );
      </div>
    </>
  );
};

export default Detail;
