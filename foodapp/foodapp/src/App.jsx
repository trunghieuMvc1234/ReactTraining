import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnterContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [fooadData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search fooadData={fooadData} setFoodData={setFoodData} />
      <Container>
        <InnterContainer>
          <FoodList setFoodId={setFoodId} foodData={fooadData} />
        </InnterContainer>
        <InnterContainer>
          <FoodDetails foodId={foodId} />
        </InnterContainer>
      </Container>
    </div>
  );
}

export default App;
