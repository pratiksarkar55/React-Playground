import { use, Suspense } from "react";
import "./App.css";

const getGps = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    resolve({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
  });
});

const GPS = () => {
  const data = use(getGps);
  return <div>{JSON.stringify(data)}</div>;
};

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h4>Loading...</h4>}>
        <GPS />
      </Suspense>
    </div>
  );
}

export default App;
