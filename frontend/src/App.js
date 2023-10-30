import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Tenantpage from "./pages/Tenantpage"
import Ownerpage from "./pages/Ownerpage"
import Sharedlayout from "./component/Sharedlayout"
import Contactpage from "./pages/Contactpage"
import Servicespage from "./pages/Servicespage"
import Loginpage from "./pages/Loginpage"




const App = ()=> {

  return (
    <div className="App">

     <Routes>

      <Route path="/" element={<Sharedlayout /> } >

      <Route index element={<Homepage />} />

      <Route path="/about" element={<Aboutpage />} />

      <Route path="/tenant" element={<Tenantpage />} />

      <Route path="/owner" element={<Ownerpage />} />

      <Route path="/services" element={<Servicespage />} />

      <Route path="/contact" element={<Contactpage />} />

      <Route path="/login" element={<Loginpage />} />
      </Route>
     </Routes>

        
    </div>
  );
}

export default App;
