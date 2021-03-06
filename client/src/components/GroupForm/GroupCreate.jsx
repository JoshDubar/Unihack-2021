import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import PrrtySidebar from "../Prrty/PrrtySidebar";
import { useFormik } from "formik";
import * as yup from "yup";
import InputAdornment from "@material-ui/core/InputAdornment";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { createNewGroup } from "../../actions/group";
import { useAuth } from "../../contexts/AuthContext";
import { retrieveUserData } from "../../actions/sendUserData";

const validationSchema = yup.object({
  groupName: yup
    .string("Enter your group name")
    .min(3, "Group should be of minimum 5 characters in length")
    .max(15, "Group should be of minimum 5 characters in length")
    .required("PRRTY Group name is required"),
  bankBSB: yup
    .string("BSB")
    .min(6, "BSB number should be 6 digits")
    .max(6, "BSB number should be 6 digits")
    .required("BSB Number is required"),
  bankNumber: yup
    .string("Bank Account Number")
    .min(16, "Bank Account Number should be 16 characters in length")
    .max(16, "Bank Account Number should be 16 characters in length")
    .required("Bank Account Number is required"),
  transactionName: yup
    .string("Enter a name for your transaction")
    .min(3, "Transaction name should be of minimum 3 characters in length")
    .required("Transaction name is required"),
  transactionValue: yup
    .number("Enter a transaction value")
    .moreThan(0, "Transaction value should be more than $0")
    .required("Transaction value is required"),
  transactionDueDate: yup.date("Enter a transaction due date"),
});

const TitleBox = styled(Box)`
  margin: 2rem;
`;

const DetailBox = styled(Box)`
  margin: 0.5rem 0 0 0.2rem;
`;

const GroupCreate = ({ createGroup, user, updateUser }) => {
  const history = useHistory();
  const { currentUser } = useAuth();
  // Prompt values for group details
  const formik = useFormik({
    initialValues: {
      groupName: "",
      bankBSB: "",
      bankNumber: "",
      transactionName: "",
      transactionValue: 0,
      transactionDueDate: new Date(),
    },
    validationSchema,
    onSubmit: async (groupInfo) => {
      createNewGroup(groupInfo, user, history, createGroup);
    },
  });

  useEffect(() => {
    if (currentUser && !user.username) {
      retrieveUserData(currentUser.uid, history, updateUser);
    }
  }, [currentUser, history, updateUser, user]);

  return currentUser ? (
    <Box display="flex" flexDirection="row">
      <PrrtySidebar />
      <Box width="100%">
        <form onSubmit={formik.handleSubmit}>
          <TitleBox>
            <Typography
              variant="h2"
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                marginTop: "0.5rem",
              }}
            >
              What's your PRRTY name?
            </Typography>
            <TextField
              id="groupName"
              label="PRRTY Name"
              value={formik.values.groupName}
              onChange={formik.handleChange}
              error={
                formik.touched.groupName && Boolean(formik.errors.groupName)
              }
              helperText={formik.touched.groupName && formik.errors.groupName}
              style={{ marginTop: "0.75rem", width: "50%" }}
              fullWidth
              required
            />
          </TitleBox>
          <TitleBox>
            <Typography
              variant="h2"
              style={{ fontSize: "2em", fontWeight: "bold", marginTop: "1rem" }}
            >
              What account will the members pay to?
            </Typography>
            <DetailBox>
              <TextField
                style={{ width: "15%" }}
                label="BSB Number"
                type="text"
                placeholder="BSB Number"
                id="bankBSB"
                value={formik.values.bankBSB}
                onChange={formik.handleChange}
                error={formik.touched.bankBSB && Boolean(formik.errors.bankBSB)}
                helperText={formik.touched.bankBSB && formik.errors.bankBSB}
                fullWidth
                required
              />
            </DetailBox>
            <DetailBox>
              <TextField
                style={{ marginTop: "0.75rem", width: "40%" }}
                label="Bank Account Number"
                type="text"
                placeholder="Bank Account Number"
                id="bankNumber"
                value={formik.values.bankNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.bankNumber && Boolean(formik.errors.bankNumber)
                }
                helperText={
                  formik.touched.bankNumber && formik.errors.bankNumber
                }
                fullWidth
                required
              />
            </DetailBox>
          </TitleBox>
          <TitleBox>
            <div>
              <Typography
                variant="h2"
                style={{
                  fontSize: "2em",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  display: "inline",
                }}
              >
                What will you be sharing?
              </Typography>
              <span>Psst, you can add more of these later!</span>
            </div>
            <DetailBox>
              <TextField
                style={{ marginTop: "0.75rem", width: "40%" }}
                label="Transaction Name"
                type="text"
                placeholder="Transaction Name"
                id="transactionName"
                value={formik.values.transactionName}
                onChange={formik.handleChange}
                error={
                  formik.touched.transactionName &&
                  Boolean(formik.errors.transactionName)
                }
                helperText={
                  formik.touched.transactionName &&
                  formik.errors.transactionName
                }
                fullWidth
                required
              />
            </DetailBox>
            <DetailBox>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                style={{ marginTop: "0.75rem", width: "40%" }}
                label="Transaction Value"
                type="number"
                placeholder="Transaction Value"
                id="transactionValue"
                value={formik.values.transactionValue}
                onChange={formik.handleChange}
                error={
                  formik.touched.transactionValue &&
                  Boolean(formik.errors.transactionValue)
                }
                helperText={
                  formik.touched.transactionValue &&
                  formik.errors.transactionValue
                }
                fullWidth
                required
              />
            </DetailBox>
            <DetailBox>
              <TextField
                style={{ marginTop: "0.75rem", width: "40%" }}
                type="date"
                label="Due Date"
                InputLabelProps={{ shrink: true }}
                id="transactionDueDate"
                value={formik.values.transactionDueDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.transactionDueDate &&
                  Boolean(formik.errors.transactionDueDate)
                }
                helperText={
                  formik.touched.transactionDueDate &&
                  formik.errors.transactionDueDate
                }
                fullWidth
                required
              />
            </DetailBox>
          </TitleBox>
          <Box style={{ margin: "1rem 0 0 2rem" }}>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              fullWidth
              style={{
                width: "20rem",
                marginTop: "1rem",
                height: "3rem",
                borderRadius: "9999",
              }}
            >
              Start Sharing!
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: (groupInfo) =>
      dispatch({ type: "CREATE_GROUP", payload: groupInfo }),
    updateUser: (user) => dispatch({ type: "LOGIN", payload: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreate);
