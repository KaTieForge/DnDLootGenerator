import { weapons } from "./data/weapons";

const App = () => {
  const generateWeapon = () => {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    //const weapons = [randomIndex];
    console.log(randomIndex);
  };
  return (
    <>
      <h1> Loot Generator!</h1>
      <button onClick={generateWeapon}>Generate</button>
    </>
  );
};

export default App;
