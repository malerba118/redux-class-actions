import React from "react";
import { connect } from "react-redux";
import { IncrementByAction, IncrementAction } from "./actions";

const Buttons = connect()(props => {
  return (
    <div>
      <button onClick={() => props.dispatch(new IncrementByAction(5))}>
        Increment by 5
      </button>
      <button onClick={() => props.dispatch(new IncrementAction())}>
        Increment
      </button>
    </div>
  );
});

export default connect()(Buttons);
