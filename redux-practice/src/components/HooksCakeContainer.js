import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  //useSelector : close equivalent to mapStateToProps
  // this accepts a function called selector (accepts an argument redux state)
  const noOfCakes = useSelector((state) => state.cake.numberOfCakes);
  
  //useDispatch: returns a reference to the dispatch function from the redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks: Number of cakes- {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
