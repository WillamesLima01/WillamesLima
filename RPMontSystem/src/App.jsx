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
import FichaEvolucao from './pages/ecotherapy/FichaEvolucao';
import PsychologistAssist from './pages/ecotherapy/PsychologistAssist';

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
  const isInventoryRoute = path.startsWith("/inventario");
  const isVeterinaryRoute = path.includes("/veterinaria");
  const isEcotherapyRoute = path.includes("/equoterapia");
  //alert(location.pathname)
  return (
    <div>       
      {isInventoryRoute  && <NavBar />}
      {isEcotherapyRoute && <NavBar />}
      {isVeterinaryRoute && <NavBarVeterinary />}      
      
      <div className="container">
        <Routes>          
          <Route path="/" element={<Login />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/inventario/listar-produtos" element={<HeritageMaterialList />} />
          <Route path="/inventario/add-produto" element={<HeritageMaterialForm />} />
          <Route path="/inventario/editar-produto/:id" element={<HeritageMaterialForm />} />
          <Route path="/inventario/listar-coleteBalistico" element={<BulletproofVestList />} /> 
          <Route path="/inventario/add-coleteBalistico" element={<BulletproofVestFrom />} />   
          <Route path='/inventario/editar-vest/:id' element={<BulletproofVestFrom />} /> 
          <Route path="/inventario/listar-pistola" element={<PistolGunList />} />      
          <Route path="/inventario/add-pistola" element={<PistolGunForm />} />   
          <Route path="/inventario/editar-pistola/:id" element={<PistolGunForm />} />
          <Route path="/inventario/listar-armaLonga" element={<LongGunList />} />     
          <Route path="/inventario/editar-armaLonga/:id" element={<LongGunForm />} />
          <Route path="/inventario/add-armaLonga" element={<LongGunForm />} /> 
          <Route path="/veterinaria/listar-equino" element={<EquineList />} /> 
          <Route path="/veterinaria/add-equino" element={<EquineForm />} />
          <Route path="/veterinaria/assistir-equino/:id" element={<EquineWatch />} />  
          <Route path="/veterinaria/editar-equino/:id" element={<EquineForm />} /> 
          <Route path='/veterinaria/resenha-equino/:id' element={<EquineDescriptiveReview />} />
          <Route path="/ecoterapia" element={<Ecotherapy />} />
          <Route path="/equoterapia/listar-praticantes" element={<PractitionerList />} /> 
          <Route path='/equoterapia/add-praticante' element={<PractitionerForm />} />  
          <Route path='/equoterapia/editar-praticante/:id' element={<PractitionerForm />} />             
          <Route path='/equoterapia/fichaEvolucao/:id' element={<FichaEvolucao />} />          
          <Route path='/equoterapia/dados-praticante/:id' element={<PractitionerDetailsData />} />           
          <Route path='/equoterapia/PhysiotherapistAssist' element={<PhysiotherapistAssist />} />   
          <Route path='/equoterapia/PsychologistAssist' element={<PsychologistAssist />} />           
        </Routes>
      </div>
    </div>
  )
}

export default App;
