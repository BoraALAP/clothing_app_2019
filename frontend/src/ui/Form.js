import React, { useState, useContext } from 'react'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Context } from '../data/store'

const Form = () => {

    const [values, setValues] = React.useState("Toronto");
    const {store, dispatch} = React.useContext(Context)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
          type: "UPDATE_CITY",
          city: values
        });
      };
    return (
        <form onSubmit={e => handleSubmit(e)}>
        <TextField
          id="standard-name"
          type="text"
          label="Name"
          value={values}
          onChange={e => setValues(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Submit"
        >
          Submit
        </Button>
      </form>
    )
}

export default Form
