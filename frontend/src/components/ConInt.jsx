import React from "react";

function ConInt() {
  return (
    <div>
      <div className="flex-row gap-10 text-center xl:text-left xl:flex xl:justify-between xl:items-center">
        {/* Image */}
        <div>
          <img
            className="mx-auto"
            src={require("../images/image2.png")}
            alt="where my img"
          />
        </div>
        {/* Text */}
        <div className="img-text text-[#EDF2F4] text-md">
          <p>consistency is KEY.</p>
          <p>Consider the long run.</p>
          <p>Progress is showing up and putting in the effort you can.</p>
          <p className="text-xl font-bold">
            <br />
            Make Progress, Not Perfection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConInt;
