import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeritageMaterialList from './pages/inventory/HeritageMaterialList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import NavBarVeterinary from './components/NavBarVeterinary';
import HeritageMaterialForm from './pages/inventory/HeritageMaterialForm';
import BulletproofVestList from './pages/inventory/BulletproofVestList';
import BulletproofVestFrom from './pages/inventory/BulletproofVestFrom';
import PistolGunList from './pages/inventory/PistolGunList';
import PistolGunForm from './pages/inventory/PistolGunForm';
import LongGunList from './pages/inventory/LongGunList';
import LongGunForm from './pages/inventory/LongGunForm';
//import Principal from './pages/PageMain/Principal';
import Login from './pages/login/Login';
import EquineList from './pages/veterinary/EquineList';
import EquineForm from './pages/veterinary/EquineForm';
import { useLocation } from 'react-router-dom';
import Ecotherapy from './pages/ecotherapy/Ecotherapy';
import PractitionerList from './pages/ecotherapy/PractitionerList';
import EquineWatch from './pages/veterinary/EquineWatch';
import EquineDescriptiveReview from './pages/veterinary/EquineDescriptiveReview';
import PractitionerForm from './pages/ecotherapy/PractitionerForm';
import PractitionerDetailsData from './pages/ecotherapy/PractitionerDetailsData';
import PhysiotherapistAssist from './pages/ecotherapy/PhysiotherapistAssist';


const App = () => {  
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {

  const location = useLocation();  
  const path = location.pathname;
  const isInventoryRoute = path.startsWith("/inventory");
  const isVeterinaryRoute = path.includes("/veterinary");
  const isEcotherapyRoute = path.includes("/ecotherapy");
  
  return (
    <div>       
      {isInventoryRoute  && <NavBar />}
      {isEcotherapyRoute && <NavBar />}
      {isVeterinaryRoute && <NavBarVeterinary />}      
      
      <div className="container">
        <Routes>          
          <Route path="/" element={<Login />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/inventory/listar-produtos" element={<HeritageMaterialList />} />
          <Route path="/inventory/add-produto" element={<HeritageMaterialForm />} />
          <Route path="/inventory/editar-produto/:id" element={<HeritageMaterialForm />} />
          <Route path="/inventory/listar-coleteBalistico" element={<BulletproofVestList />} /> 
          <Route path="/inventory/add-coleteBalistico" element={<BulletproofVestFrom />} />   
          <Route path='/inventory/editar-vest/:id' element={<BulletproofVestFrom />} /> 
          <Route path="/inventory/listar-pistola" element={<PistolGunList />} />      
          <Route path="/inventory/add-pistola" element={<PistolGunForm />} />   
          <Route path="/inventory/editar-pistola/:id" element={<PistolGunForm />} />
          <Route path="/inventory/listar-armaLonga" element={<LongGunList />} />     
          <Route path="/inventory/editar-armaLonga/:id" element={<LongGunForm />} />
          <Route path="/inventory/add-armaLonga" element={<LongGunForm />} /> 
          <Route path="/veterinary/listar-equino" element={<EquineList />} /> 
          <Route path="/veterinary/add-equino" element={<EquineForm />} />
          <Route path="/veterinary/assistir-equino/:id" element={<EquineWatch />} />  
          <Route path="/veterinary/editar-equino/:id" element={<EquineForm />} /> 
          <Route path='/veterinary/resenha-equino/:id' element={<EquineDescriptiveReview />} />
          <Route path="/ecoterapy" element={<Ecotherapy />} />
          <Route path="/ecotherapy/listar-practitioners" element={<PractitionerList />} /> 
          <Route path='/ecotherapy/add-practitioner' element={<PractitionerForm />} />  
          <Route path='/ecotherapy/editar-practitioner/:id' element={<PractitionerForm />} />   
          <Route path='/ecotherapy/dados-practitioner/:id' element={<PractitionerDetailsData />} />   
          <Route path='/ecotherapy/PhysiotherapistAssist' element={<PhysiotherapistAssist />} />            
        </Routes>
      </div>
    </div>
  )
}

export default App;
