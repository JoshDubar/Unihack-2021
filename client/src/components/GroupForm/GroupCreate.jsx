import React from 'react'
import styled from "styled-components";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import PrrtySidebar from "../Prrty/PrrtySidebar";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Group.css";
import InputAdornment from '@material-ui/core/InputAdornment';

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
    .min(8, "Bank Account Number should be of minimum 8 characters in length")
    .required("Bank Account Number is required"),
  transactionName: yup
    .string("Enter a name for your transaction")
    .min(3, "Transaction name should be of minimum 3 characters in length")
    .required("Transaction name is required"),
  transactionAmount: yup
    .number("Enter a transaction amount")
    .moreThan(0, "Transaction amount should be more than $0")
    .required("Transaction amount is required"),
  transactionDueDate: yup
    .date("Enter a transaction due date")
    .required("Transaction due date is required")
});

const TitleBox = styled(Box)`
  margin: 3rem;
`

const DetailBox = styled(Box)`
  margin: 0.2rem;
`

const GroupCreate = () => {

  // Prompt values for group details
  const formik = useFormik({
    initialValues: {
      groupName: "",
      bankBSB: "",
      bankNumber: "",
      transactionName: "",
      transactionAmount: 0,
      transactionDueDate: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box display="flex" flexDirection="row">
      <PrrtySidebar />
      <Box width="100%">
        <form onSubmit={formik.handleSubmit}>
          <TitleBox>
            <Typography 
              variant="h2"
              style={{ fontSize: "2em", fontWeight: "bold", marginTop: "1rem" }}
            >
              Whats your PRRTY name?
            </Typography>
            <TextField 
              id="groupName"
              label="PRRTY Name" 
              value={formik.values.groupName}
              onChange={formik.handleChange}
              error={formik.touched.groupName && Boolean(formik.errors.groupName)}
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
            <DetailBox className="detailBox">
              <Typography 
                style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "1rem" }}
              >
                BSB
              </Typography>
              <TextField
                style={{ width: "15%"}}
                label="BSB Number"
                type="text"
                placeholder="BSB Number"
                id="bankBSB"
                value={formik.values.bankBSB}
                onChange={formik.handleChange}
                error={
                  formik.touched.bankBSB && Boolean(formik.errors.bankBSB)
                }
                helperText={formik.touched.bankBSB && formik.errors.bankBSB}
                fullWidth
                required
              />
            </DetailBox>
            <DetailBox>
              <Typography 
                  style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "1rem" }}
                >
                  Account Number
              </Typography>
              <TextField
                style={{ marginTop: "0.75rem", width: "40%"}}
                label="Bank Account Number"
                type="text"
                placeholder="Bank Account Number"
                id="bankNumber"
                value={formik.values.bankNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.bankNumber && Boolean(formik.errors.bankNumber)
                }
                helperText={formik.touched.bankNumber && formik.errors.bankNumber}
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
              <Typography 
                  style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "1rem" }}
                >
                  Transaction Name
              </Typography>
              <TextField
                style={{ marginTop: "0.75rem", width: "40%"}}
                label="Transaction Name"
                type="text"
                placeholder="Transaction Name"
                id="transactionName"
                value={formik.values.transactionName}
                onChange={formik.handleChange}
                error={
                  formik.touched.transactionName && Boolean(formik.errors.transactionName)
                }
                helperText={formik.touched.transactionName && formik.errors.transactionName}
                fullWidth
                required
              />
            </DetailBox>
            <DetailBox>
              <Typography 
                  style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "1rem" }}
                >
                  Transaction Amount
              </Typography>
              <TextField
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                style={{ marginTop: "0.75rem", width: "40%"}}
                label="Transaction Amount"
                type="number"
                placeholder="Transaction Amount"
                id="transactionAmount"
                value={formik.values.transactionAmount}
                onChange={formik.handleChange}
                error={
                  formik.touched.transactionAmount && Boolean(formik.errors.transactionAmount)
                }
                helperText={formik.touched.transactionAmount && formik.errors.transactionAmount}
                fullWidth
                required
              />
            </DetailBox>
            <DetailBox>
              <Typography 
                  style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "1rem" }}
                >
                  Transaction Due Date
              </Typography>
              <TextField
                style={{ marginTop: "0.75rem", width: "40%"}}
                label="Transaction DueDate"
                type="text"
                placeholder="Transaction DueDate"
                id="transactionDueDate"
                value={formik.values.transactionDueDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.transactionDueDate && Boolean(formik.errors.transactionDueDate)
                }
                helperText={formik.touched.transactionDueDate && formik.errors.transactionDueDate}
                fullWidth
                required
              />
            </DetailBox>
          </TitleBox>
          <Button
            //disabled={loading}
            type="submit"
            fullWidth
            className="transaction-button"
            style={{ marginTop: "1rem" }}
          >
            Add Transaction
          </Button>
          <Button
            //disabled={loading}
            type="submit"
            fullWidth
            className="party-share-button"
            style={{ marginTop: "1rem" }}
          >
            Start Sharing!
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default GroupCreate;
