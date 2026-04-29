import React from "react";
import { Link } from "react-router-dom";
import SimpleLoot from "../../components/SimpleLoot";

export const SimpleWeapons = () => {
  //Data
  const weapons = [
    { name: "Club", category: "Simple Melee" },
    { name: "Dagger", category: "Simple Melee" },
    { name: "Heavymace", category: "Simple Melee" },
    { name: "lightmace", category: "Simple Melee" },
    { name: "Morningstar", category: "Simple Melee" },
    { name: "Quarterstaff", category: "Simple Melee" },
    { name: "Spear", category: "Simple Melee" },
    { name: "Light crossbow", category: "Simple Ranged" },
    { name: "Heavy crossbow", category: "Simple Ranged" },
    { name: "Dart", category: "Simple Ranged" },
    { name: "Sling", category: "Simple Ranged" },
    { name: "Battleaxe", category: "Martial Melee" },
    { name: "Flail", category: "Martial Melee" },
    { name: "Greataxe", category: "Martial Melee" },
    { name: "Greatsword", category: "Martial Melee" },
    { name: "Guisarme", category: "Martial Melee" },
    { name: "Halbred", category: "Martial Melee" },
    { name: "Longsword", category: "Martial Melee" },
    { name: "Rapier", category: "Martial Melee" },
    { name: "Scimitar", category: "Martial Melee" },
    { name: "Shortsword", category: "Martial Melee" },
    { name: "Trident", category: "Martial Melee" },
    { name: "Warhammer", category: "Martial Melee" },
    { name: "Longbow", category: "Martial Ranged" },
    { name: "Shortbow", category: "Martial Ranged" },
    { name: "Composite longbow", category: "Martial Ranged" },
    { name: "Composite shortbow", category: "Martial Ranged" },
  ];

  //JSX
  return (
    <div className="container-fluid p-2 bg-light">
      <h1>Simple Weapons Generator</h1>
      <SimpleLoot weapons={weapons} />
      <Link to="/">Home</Link>
    </div>
  );
};
