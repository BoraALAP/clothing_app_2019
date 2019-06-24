import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import Geolocation from "react-geolocation";

// import { makeStyles } from "@material-ui/core/styles";

import { Context } from "../data/store";
import Extras from "../ui/Extras";
import Layers from "../ui/Layers";
import Form from "../ui/Form";

const Section = styled.section`
  border-left: 1px solid ${props => props.theme.accent.main};
`;
const Contoller = () => {
  // const googleapi = "AIzaSyBegVaDPS8RWIpYCVzVJIhW9GdS6_x7UDU";
  const appid = "9d7f2adeb43cee70bfb0c3b7bd9d8462";
  const { store, dispatch } = useContext(Context);

  // const [position, setPosition] = useState({ longitude: 0, latitude: 0 });

  const [disabled, setDisabled] = React.useState({
    disabled1: false,
    disabled2: false,
    disabled3: false,
    disabled4: false,
    disabledSwitch: false
  });

  const fetchProducts = async() => {
    const apiKey = 'Z4Nltv77dl9UqP5i1QdxX4ihxszKLzfB0prsON69'
    const url = 'https://f0kv9hffr5.execute-api.us-east-1.amazonaws.com/prod/'
    try{
      const data = await axios.get(url,{
        header:{
          'x-api-key': apiKey
        }
      })
      console.log(data.data)
    } catch(error){
      console.log(error);
      
    }
  }

  const fetchData = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${store.city}&appid=${appid}&units=metric`
    );

    await dispatch({
      type: "UPDATE_TEMPERATURE",
      temperature: Math.round(data.data.main.temp)
    });
  };

  const checkTemp = () => {
    if (store.temperature > 22) {
      setDisabled({
        disabled4: true,
        disabled3: true,
        disabled1: false,
        disabledSwitch: true
      });
      dispatch({
        type: "UPDATE_LAYER",
        layer: 1
      });
    } else if (store.temperature > 14 && store.temperature < 21) {
      setDisabled({ disabled4: true, disabled1: false, disabledSwitch: true });
      dispatch({
        type: "UPDATE_LAYER",
        layer: 3
      });
    } else if (store.temperature < 5) {
      setDisabled({ disabled4: false, disabled1: true, disabledSwitch: false });
      dispatch({
        type: "UPDATE_LAYER",
        layer: 2
      });
    } else {
      setDisabled({
        disabled4: false,
        disabled1: false,
        disabledSwitch: false
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [store.city]);

  useEffect(() => {
    checkTemp();
  }, [store.temperature]);

  useEffect(() => {fetchProducts()},[]);

  return (
    <Section>
      <Form />
      <h2>{store.temperature}&#176;</h2>
      <Layers
        disabled1={disabled.disabled1}
        disabled2={disabled.disabled2}
        disabled3={disabled.disabled3}
        disabled4={disabled.disabled4}
      />
      <Extras disabledSwitch={disabled.disabledSwitch} />
    </Section>
  );
};

export default Contoller;
