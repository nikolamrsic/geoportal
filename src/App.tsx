
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/landing";
import { Geoportal } from './components/pages/geoportal'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/geoportal" element={<Geoportal />}></Route>
      </Routes>
    </div>
  )
}

export default App
