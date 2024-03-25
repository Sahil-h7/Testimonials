import React from "react";
import Heading from "./componenets/Heading";
import Testimonials from "./componenets/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

      <Heading/>

      <Testimonials reviews={reviews}/>

    </div>
  );
};

export default App;
