import "./App.css";
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Home,
  Cources,
  PremiumCources,
  PremiumContent,
  CourceDetail,
  Login,
} from "./component";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cources" element={<Cources />}>
            <Route path="premium-cources" element={<PremiumCources />} />
          </Route>
          <Route path="/cources/:id" element={<CourceDetail />}>
            <Route
              path="premium"
              element={
                <PrivateRouter>
                  <PremiumContent />
                </PrivateRouter>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
