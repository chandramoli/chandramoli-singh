import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Provider, useDispatch } from "react-redux";
import fetchData from "../../../redux/actions";
import BuildingData from "./component";









const Building = () => {
  const [filter,setFilter] = useState('')
  const [submit,setSubmit] = useState(false)
  const [data,setaData] = useState({})

  useEffect(()=>{
    getData()
  },[])
  const getData = ()=>{
    axios.get('/data/test_fliter_options.json').then(res=>{setaData(res.data)}).catch(err=>{console.log(err.message)})
  }


if (submit) {
    return <BuildingData data={filter}/>
}else{
    return (Object.keys(data).length > 0 ? (
        <div>
        <h1>BUILDING</h1>
      <div style={{display:'flex'}}>
        {Object.entries(data).map(([label, data], i) => {
          return <div
            style={{
              display: "flex",
              textAlign: "center",
              width: "100%",
              justifyContent: "space-between",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
            key={i}
          >
            <div key={i}>
              <h1>{label}</h1>
              {data.map((val, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <input type="radio" name={label} id={val} value={val} onChange={(e)=>{setFilter([...filter,{[label] :e.target.value}])}}/>
                    <label htmlFor={val} children={val} />
                  </div>
                );
              })}
            </div>
          </div>;
        })}
      </div>
      <button onClick={()=>{

          {!filter ? alert('please select any filter'):setSubmit(true)}
          
      }} children="apply"/>
      </div>
    ) : (
      <h1>Loading</h1>)
    )}
};

export default Building;
