const iniitalState = {
  loading: true,
  data: [],
  error: "",
};

const REQUEST_INITIALIZED = "REQUEST_INITIALIZED";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILED = "REQUEST_FAILED";

function initializeRequest() {
  return {
    type: REQUEST_INITIALIZED,
  };
}
function successRequest(data) {
  return {
    type: REQUEST_SUCCESS,
    payload: data,
  };
}
function errorRequest(error) {
  return {
    type: REQUEST_SUCCESS,
    payload: data,
  };
}
