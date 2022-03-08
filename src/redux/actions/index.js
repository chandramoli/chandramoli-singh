
const axios = require("axios");



export const API_REQUEST_INIT = "API_REQUEST_INIT";
export const API_REQUEST_SUCCESS = "API_REQUEST_SUCCESS";
export const API_REQUEST_FAILED = "API_REQUEST_FAILED";

const userReqInit = () => {
  return { type: API_REQUEST_INIT };
};
const userReqSuccess = (data) => {
  return { type: API_REQUEST_SUCCESS, payload: data };
};
const userReqFailed = (error) => {
  return { type: API_REQUEST_FAILED, payload: error };
};

const fetchData = () => {
  return function (dispatch) {
    axios
      .get('/data/test_units_data.json')
      .then((res) => {
        console.log(res.data);
        dispatch(userReqSuccess(res.data))
      })
      .catch((err) => {
        console.log({error:err.message});
        dispatch(userReqFailed(err.message));
      });
  };
};




export default fetchData