import React, { useState } from "react";

const array = [
  "Globally Acclaimed University in Delhi-NCR",
  "Proven Leadership with Vision and Integrity",
  "Sunrise Programs with Industry-Oriented Curriculum",
  "International Exchange Programs",
];

export const HeaderCaption = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    if (counter < 3) {
      setCounter(counter + 1);
    }else{
        setCounter(0)
    }
  }, 5000)

  return (
    <div className="header-caption">
      <h1 >
          {array[counter]}
      </h1>
    </div>
  );
};
