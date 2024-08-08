import axios from "axios";
let baseURL = "http://localhost:3000/api";

function submitPost(endpoint, data) {
  console.log(data);

  axios
    .post(baseURL + endpoint,  data )
    .then((res) => {
      console.log("success");
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
    });
}

export default  submitPost ;
