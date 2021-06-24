import React from "react";
import restaurant from "./restaurant.jpg";
import "./App.css";

function Header(name) {
  console.log(name.name)
  return (
    <header>
      <h1>{name.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height={200} alt="napkin and silverware at a restaurant table"/>
      <ul style={{ textAlign: "left" }}>
        {/** if we write like below we get a warning that it should have unique key */}
        {/*1 {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))} */}
        {/* 2 {props.dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))} */}
        {props.dishes.map((dish) => (
            <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Chicken biryani", "Shawarma", "Butter Paneer"];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish,
}));

function App() {
  return (
    <div className="App">
      <Header name="Divya" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
