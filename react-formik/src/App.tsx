import "./App.css";
import { FormikAsComponent } from "./FormikAsComponent/FormikAsComponent";
import { FormikAsHook } from "./FormikAsHook/FormikAsHook";
import { YoutubeFormComponent } from "./components/FormikComponent";

function App() {
  return (
    <>
      <YoutubeFormComponent />
      {/* <FormikAsHook /> */}
      {/* <FormikAsComponent /> */}
    </>
  );
}

export default App;
