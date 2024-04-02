import "./App.css";
import Header from "./Header";
import Stats from "./Stats";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header page={"/profile"} btn={"Profile"} />
      <Stats />
      <Form />
      <List />
      <Footer />
    </div>
  );
}

export default App;
