import axios from "axios"

export const sendUserData = (user, history) => {
  axios
    .post("http://localhost:5000/users", user)
    .then(res => {
      console.log("res", res);
      history.push("/home");
    })
    .catch(err => {console.log(err.message)})
}