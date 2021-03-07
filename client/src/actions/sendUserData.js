import axios from "axios";
const { API_URL } = process.env;
const URL = "http://localhost:5000";

export const sendUserData = (user, history, updateUser) => {
  axios
    .post(`${URL}/users`, user)
    .then((res) => {
      console.log("res", res);
      const { data } = res;
      if (data) {
        const { email, username, groups, _id: userId } = data;
        updateUser({ email, username, groups, userId });
        history.push("/home");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//Used when you want get A user's data
/**
 * @body: userId
 */
export const retrieveUserData = (user, history) => {
  axios
    .get(`${URL}/user/userData`, user)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//Get all the groups a User is in a group
/**
 * @body userId
 */
export const retrieveUserGroups = (user, history) => {
  axios
    .get(`${URL}/user/returnAllGroups`, user)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
