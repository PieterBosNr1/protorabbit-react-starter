import React from "react";
import Header from "./Header";

const Home = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <footer>some footer</footer>
    </div>
  );
};

export default Home;
