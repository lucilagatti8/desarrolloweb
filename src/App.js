import './App.css';
import Login from './layouts/Login'
import IniciarSesion from './pages/IniciarSesion';
import Menu from './layouts/Menu'
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/Menu3';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NuevaPLanilla from './components/NuevaPLanilla';
import Consultas from './components/Consultas'
import Alarmas from './components/Alarmas'
import NuevoUsuario from './components/NuevoUsuario'
import Tablas from './components/Tablas';
import TablasBarrios from './components/TablasBarrios';
import Planillas from './components/Planillas';
import Problematicas from './components/Problematicas';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>}>
          <Route index element ={<IniciarSesion/>}
          />
        </Route>
        <Route path="/menu" element= {<Menu/>}>
          <Route index element= {<Menu1 />}/>
          <Route path="minimo" element= {<Menu1/>}/>
          <Route path="minimo/planilla" element= {<NuevaPLanilla/>}/>
          <Route path="intermedio" element ={<Menu2/>}/>
          <Route path="consultas" element ={<Consultas/>}/>
          <Route path="consultas/usuarios" element ={<Tablas/>}/>
          <Route path="consultas/barrios" element ={<TablasBarrios/>}/>
          <Route path="consultas/planillas" element ={<Planillas/>}/>
          <Route path="consultas/problematicas" element ={<Problematicas/>}/>
          <Route path="intermedio/nuevoUsuario" element ={<NuevoUsuario/>}/>
          <Route path="intermedio/alarmas" element ={<Alarmas/>}/>
          <Route path="Alto" element ={<Menu3/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
