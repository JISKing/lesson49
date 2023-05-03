import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);                
  const dispatch = useDispatch(); 

  const save = () => { 
    const data = {coffee, sugar};
    localStorage.setItem("ProductsList", JSON.stringify(data));
  };
  const clear = () => {
    localStorage.removeItem("ProductsList");
    dispatch({type: "resetList"});
  };

  return (
    <div className="save">
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && (
        <>
          <button onClick={save} >SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </>
      )}
    </div>
  );
};

export default SaveList;
