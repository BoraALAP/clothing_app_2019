import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Context } from "../data/store";

const Extras = (props) => {

  const {store, dispatch} = React.useContext(Context);
  
  const wantExtra = e => {
    dispatch({
      type: "UPDATE_EXTRAS",
      extras: !store.extras
    });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={store.extras}
            onChange={e => wantExtra(e)}
            value="extras"
            disabled={props.disabledSwitch}
          />
        }
        label="would you like extra"
      />
    </FormGroup>
  );
};

export default Extras;
