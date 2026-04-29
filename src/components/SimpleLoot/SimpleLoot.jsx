import React from "react";

export const SimpleLoot = ({ weapons }) => {
  //JavaScript
  const simpleLoot = weapons.map((weapons, index) => {
    const { name, category } = weapons;

    return (
      <div
        className={`row py-2 ${index % 2 === 0 ? "bg-light" : "bg-white"}`}
        key={index}
      >
        <div className="col-6">{name}</div>
        <div className="col-6">{category}</div>
      </div>
    );
  });

  return (
    <>
      <div className="mt-1" style={{ fontFamily: "serif" }}>
        <div className="border fw-bold px-4">
          <div className="row align-items-start">
            <div className="col-6">Name</div>
            <div className="col-6">Category</div>
          </div>
          {simpleLoot}
        </div>
      </div>
    </>
  );
};
