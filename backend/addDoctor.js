const axios = require("axios");
const url = "http://localhost:5000/doctors/add";
const body = {
  //keertigupta131099
  username: "sagar.19b131033@abes.ac.in",
  password: "Sagari@123",
  name: "Sagar Nagpal",
  phoneNumber: "8477056657",
  specialization: "Endocrinologists",
  feesPerSession: "0",
  email: "sagar.19b131033@abes.ac.in",
};

async function main() {
  try {
    await axios.post(url, body);
    console.log("Doctor Added");
  } catch (er) {
    console.log(er);
  }
}

main();
