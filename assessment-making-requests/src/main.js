const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  return axios
  .get(`${BASE_URL}/constellations`)
  .then(({ data }) => {
    const result = data.filter((constellation) => {
      return constellation;
    })
    console.log(result);
  })
  .catch(({ message }) => {
    console.error(message);
  });
}




function create(body) {
  return axios
  .post(`${BASE_URL}/constellations`, body)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(({ message }) => {
    console.error(message);
  });
}




function show(id) {
  return axios
  .get(`${BASE_URL}/constellations/${id}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(({ message }) => {
    console.error(message);
  });
}




function update(id, body) {
  return axios
  .put(`${BASE_URL}/constellations/${id}`, body)
  .then(({ data }) => {
    console.log(data);
  })
   .catch(({ message }) => {
    console.error(message);
  });
}




function destroy(id) {
  return axios
  .delete(`${BASE_URL}/constellations/${id}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(({ message }) => {
    console.error(message);
  });
}






module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};



































