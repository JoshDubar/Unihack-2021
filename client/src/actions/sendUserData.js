import axios from "axios";

export const sendUserData = (user, history, updateUser) => {
  axios
    .post("http://localhost:5000/users", user)
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
