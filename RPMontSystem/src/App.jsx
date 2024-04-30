import React from 'react';
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
import Principal from './pages/PageMain/Principal';
import Login from './pages/login/Login';
import EquineList from './pages/veterinary/EquineList';
import EquineForm from './pages/veterinary/EquineForm';
import { useLocation } from 'react-router-dom';

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
  const isInventoryRoute = path.startsWith("/inventory/...");
  const isVeterinaryRoute = path.includes("/veterinary/...");
  console.log(path)
  console.log(isVeterinaryRoute)     
  console.log(isInventoryRoute) 
  return (
    <div> 
      
      {isInventoryRoute && <NavBar />}
      {isVeterinaryRoute && <NavBarVeterinary />}      
      
      <div className="container">
        <Routes>          
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listar-produtos" element={<HeritageMaterialList />} />
          <Route path="/add-produto" element={<HeritageMaterialForm />} />
          <Route path="/editar-produto/:id" element={<HeritageMaterialForm />} />
          <Route path="/listar-coleteBalistico" element={<BulletproofVestList />} /> 
          <Route path="/add-coleteBalistico" element={<BulletproofVestFrom />} />   
          <Route path='/editar-vest/:id' element={<BulletproofVestFrom />} /> 
          <Route path="/listar-pistola" element={<PistolGunList />} />      
          <Route path="/add-pistola" element={<PistolGunForm />} />   
          <Route path="/editar-pistola/:id" element={<PistolGunForm />} />
          <Route path="/listar-armaLonga" element={<LongGunList />} />     
          <Route path="/editar-armaLonga/:id" element={<LongGunForm />} />
          <Route path="/add-armaLonga" element={<LongGunForm />} /> 
          <Route path="/listar-equino" element={<EquineList />} /> 
          <Route path="/add-equino" element={<EquineForm />} />
          <Route path="/editar-equino/:id" element={<EquineForm />} />                   
        </Routes>
      </div>
    </div>
  )
}

export default App;
