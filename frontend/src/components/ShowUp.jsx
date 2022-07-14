import React from "react";

function ShowUp() {
  return (
    <div className="flex-row gap-10 text-center xl:text-left xl:flex xl:justify-between xl:items-center">
      {/* Text */}
      <div className="img-text text-[#EDF2F4] text-md">
        <p>it's all about showing up.</p>
        <p>one day at a time.</p>
        <p>
          And before you even think about it, you’re a month deep, a little bit
          more and it’s a hole YEAR!
        </p>
        <p className="text-xl font-bold">
          <br />
          Just. Show. Up.
        </p>
      </div>
      {/* Image */}
      <div>
        <img
          className="mx-auto"
          src={require("../images/image1.png")}
          alt="where my img"
        />
      </div>
    </div>
  );
}

export default ShowUp;
