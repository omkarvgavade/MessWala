import MessProfile from "./Components/MessProfile/MessProfile";
import { Signup } from "./Components/authentication/signup"
import { Login } from "./Components/authentication/loginform";
import { MessForm } from "./Components/messform/messForm";
import { MealForm } from "./Components/messform/mealForm";
import LandingPage from "./Components/LandingPage/LandingPage";
import OverView from './Components/MessProfile/OverView'
function App() {
  return (
    <div className="App">
      <Login />
      {/* <MessProfile /> */}
      <OverView />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
