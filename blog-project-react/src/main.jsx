import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Card from "./Components/Card.jsx";
import Product from "./Components/Product.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Card titleTex="Card No: 01" detailExplanation="This Card to mark the day"/>
    <Product titleTex="Product" detailExplanation="You will Do it Insallah"/>
  </StrictMode>
);
