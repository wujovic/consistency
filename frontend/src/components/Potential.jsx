import React from "react";

function Potential() {
  return (
    <div>
      <div className="flex-row gap-10 text-center xl:text-left xl:flex xl:justify-between xl:items-center">
        {/* Text */}
        <div className="img-text text-[#EDF2F4] text-md">
          <p>consistent action.</p>
          <p>It gets easier.</p>
          <p>
            Putting in the work even when you don't feel like it, leads to the
            results over time.
          </p>
          <p className="text-xl font-bold">
            <br />
            The Sky Is Not The Limit, Your Mind Is.
          </p>
        </div>
        {/* Image */}
        <div>
          <img
            className="mx-auto"
            src={require("../images/image3.png")}
            alt="where my img"
          />
        </div>
      </div>
    </div>
  );
}

export default Potential;
