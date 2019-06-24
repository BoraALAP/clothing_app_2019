import React, { useContext } from 'react'
import { Context } from '../data/store'

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Layers = (props) => {

    const {store, dispatch} = React.useContext(Context)
    const handleLayers = e => {
        dispatch({
          type: "UPDATE_LAYER",
          layer: parseInt(e)
        });
      };

    return (
        <FormControl component="fieldset">
        <FormLabel component="legend">How many layers?</FormLabel>
        <RadioGroup
          aria-label="Layer"
          name="layer"
          value={store.layer.toString()}
          onChange={e => handleLayers(e.target.value)}
        >
          <FormControlLabel
            value="1"
            disabled={props.disabled1}
            control={<Radio />}
            label="1"
          />
          <FormControlLabel
            value="2"
            disabled={props.disabled2}
            control={<Radio />}
            label="2"
          />
          <FormControlLabel
            value="3"
            disabled={props.disabled3}
            control={<Radio />}
            label="3"
          />
          <FormControlLabel
            value="4"
            disabled={props.disabled4}
            control={<Radio />}
            label="4"
          />
        </RadioGroup>
      </FormControl>
    )
}

export default Layers
