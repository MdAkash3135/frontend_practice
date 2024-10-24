import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Card from "./Components/Card.jsx";
let vr = "hi";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Card titleTex="Card No: 01" detailExplanation="This Card to mark the day"/>
   
    
  </StrictMode>
);
