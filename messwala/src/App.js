import MessProfile from "./Components/MessProfile/MessProfile";
import { Signup } from "./Components/authentication/signup"
import { Login } from "./Components/authentication/loginform";
import { MessForm } from './Components/messform/MessForm'
import { MealForm } from './Components/messform/MealForm'
import LandingPage from "./Components/LandingPage/LandingPage";
import MealsSection from "./Components/MessProfile/MealsSection";
import OverView from './Components/MessProfile/OverView'
function App() {
  return (
    <div className="App">
      <Login />
      {/* <MessProfile /> */}
      {/* <OverView /> */}
      <MealsSection />
      {/* <Signup /> */}

    </div>
  );
}

export default App;
