import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Grid,
} from "@mui/material";

import React from "react";
import "./Style.css";
import { validationSchema } from "../Schema";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Home = () => {
  const initalValue = {
    firstName: "",
    lastName: "",
    email: "",
    QueryType: "",
    message: "",
  };

  const handleSave = (values) => {
    console.log(values);
  };

  return (
    <div className="main">
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "40%",
              height: "auto",
              display: "flex",
            },
          }}
        >
          <Paper elevation={3}>
            <div
              style={{
                marginLeft: "12%",
                marginTop: "3%",
                width: "87%",
              }}
            >
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  margin: "0% 0% 3%",
                }}
              >
                Contact Us
              </Typography>
              <Formik
                enableReinitialize={true}
                initialValues={initalValue}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  let submitValue = values;
                  const result = await handleSave(submitValue);
                  if (result === 1) {
                    resetForm();
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form>
                    {/* user Name  */}
                    <div className="username">
                      <Grid container>
                        <Grid item xs={6}>
                          <div>
                            <Typography style={{ marginBottom: "2%" }}>
                              First Name *
                            </Typography>
                            <Field
                              as={TextField}
                              style={{ width: "85%" }}
                              size="small"
                              variant="outlined"
                              name="firstName"
                              placeholder="First Name"
                              onChange={(data, event) => {
                                handleChange(data, event);
                              }}
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="errorStyle"
                              style={{
                                color: "red",
                                marginTop: "1%",
                                textAlign: "left",
                                marginLeft: "0%",
                              }}
                            />
                          </div>
                        </Grid>
                        <Grid xs={6}>
                          <div>
                            <Typography style={{ marginBottom: "2%" }}>
                              Last Name *
                            </Typography>
                            <Field
                              as={TextField}
                              style={{ width: "85%" }}
                              size="small"
                              variant="outlined"
                              name="lastName"
                              placeholder="Last Name"
                              onChange={(data, event) => {
                                handleChange(data, event);
                              }}
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="errorStyle"
                              style={{
                                color: "red",
                                marginTop: "1%",
                                textAlign: "left",
                                marginLeft: "0%",
                              }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    {/* email */}

                    <div>
                      <Typography style={{ marginBottom: "2%" }}>
                        Email Address *
                      </Typography>
                      <Field
                        as={TextField}
                        style={{ width: "85%", marginBottom: "2%" }}
                        size="small"
                        variant="outlined"
                        name="email"
                        placeholder="Email Id"
                        onChange={(data, event) => {
                          handleChange(data, event);
                        }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="errorStyle"
                        style={{
                          color: "red",
                          marginTop: "1%",
                          textAlign: "left",
                          marginLeft: "0%",
                        }}
                      />
                    </div>

                    {/*  */}
                    <div>
                      <Typography style={{ marginBottom: "2%" }}>
                        Query Type *
                      </Typography>

                      <RadioGroup
                        row={window.innerWidth > 800}
                        column={window.innerWidth <= 800}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          style={{
                            border: "1px solid #4d4d4d",
                            padding: "1px",
                            width: "40%",
                            marginLeft: "0%",
                            borderRadius: "9px",
                          }}
                          value="general_Enquiry"
                          control={<Radio />}
                          label="General Enquiry"
                        />
                        <FormControlLabel
                          style={{
                            border: "1px solid #4d4d4d",
                            padding: "3px",
                            width: "40%",
                            marginLeft: "0%",
                            borderRadius: "9px",
                          }}
                          value="support_request"
                          control={<Radio />}
                          label="Support Request"
                        />
                      </RadioGroup>
                    </div>

                    {/* message  */}
                    <div>
                      <Typography
                        style={{ marginBottom: "2%", marginTop: "2%" }}
                      >
                        Message *
                      </Typography>
                      <Field
                        as={TextField}
                        style={{ width: "85%" }}
                        multiline
                        rows={5}
                        size="small"
                        variant="outlined"
                        name="message"
                        placeholder=""
                        onChange={(data, event) => {
                          handleChange(data, event);
                        }}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="errorStyle"
                        style={{
                          color: "red",
                          marginTop: "1%",
                          textAlign: "left",
                          marginLeft: "0%",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: "6%",
                        marginBottom: "6%",
                      }}
                    >
                      <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="I consent to being contacted by the team"
                      />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          width: "85%",
                          textTransform: "capitalize",
                          padding: "7px",
                          fontSize: "18px",
                          backgroundColor: "ForestGreen",
                          marginBottom: "5%",
                        }}
                        onClick={handleSave}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Home;
