import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
         <Button text='Login' className="btn-outline-info" />
        </div>
      </div>
    </>
  );
};

export default Home;
