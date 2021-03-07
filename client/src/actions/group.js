import axios from "axios";
import { retrieveUserGroups } from "./sendUserData";

const URL = "http://localhost:5000";

//Create a new Group
/**
 * 
 * @body userId
 * @body username
 * @body service - this is an array of services
 *         service: {
                value - the total amount to paid for the service
                name - name of the service
                due - default is the date it was created                
            }
 * @Body bsb
 * @body accountNumber
 * @body name - this is the prrty's name
 */
export const createNewGroup = (groupInfo, user, history, createGroup) => {
  const { userId, username } = user;
  const {
    groupName: name,
    transactionName,
    transactionValue: value,
    transactionDueDate: due,
    bankBSB: bsb,
    bankNumber: accountNumber,
  } = groupInfo;
  const body = {
    userId,
    username,
    bsb,
    name,
    accountNumber,
    service: [{ name: transactionName, value, due }],
  };
  axios
    .post(`${URL}/groups/newGroup`, body)
    .then((res) => {
      console.log(res);
      const { _id: groupId, name, host } = res.data;
      createGroup({ groupId, name, host });
      history.push(`/group/${groupId}`);
    })
    .catch((err) => console.log(err.message));
};

//Get a Group Info
/**
 * @body groupId
 */
export const returnGroupInfo = (group, history) => {
  axios
    .get(`${URL}/groups/getGroup`, group)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log(err.message));
};

//Add a member to a group
/**
 * @body groupId
 * @body memberId - this is the userId of the user you're adding to the group
 * @body username - the username of the user you're adding
 */
export const addMemberToGroup = (body, history) => {
  axios
    .get(`${URL}/groups/addMember`, body)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log(err.message));
};

//Member has made a payment
/**
 * @body groupId
 * @body memberId
 */
export const memberPaid = (body, history) => {
  axios
    .patch(`${URL}/groups/paymentMade`, body)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log(err.message));
};

//Changing the Amount to Pay of a member
/**
 * @body groupId
 * @body memberId
 * @body amountToPay
 */
export const amountRemainingToPay = (body, history) => {
  axios
    .patch(`${URL}/groups/amountToPay`, body)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => console.log(err.message));
};
