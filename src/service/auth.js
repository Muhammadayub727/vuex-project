import  submitPost  from "./axios";
// import axios from "axios"

const AuthServise = {
  register(user) {
    return submitPost("/users", { user });
  },
};

export default AuthServise;
