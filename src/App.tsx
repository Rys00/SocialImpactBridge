import "./App.css";
import SignUpForm from "./components/forms/sign-up-form.component";
import Navbar from "./components/navbar/navbar.component.tsx";


function App() {
  return (
    <div className={'main'}>
        <Navbar/>
      <SignUpForm />
    </div>
  );
}

export default App;
