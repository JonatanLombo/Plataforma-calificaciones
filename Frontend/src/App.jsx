import { Routes,Route } from "react-router-dom";
import { Login } from "./login";
import { Dashboard } from "./dashboard";
import { NuevoEstudiante } from "./nuevoEstudiante";
import { EditarEstudiante } from "./editarEstudiante";
import { CalificacionesEstudiante } from "./calificacionesEstudiante";


export function App(){

  return(
    <Routes>
      <Route path="/" element= {<Login />}/>
      <Route path="/dashboard" element= {< Dashboard/>}/>
      <Route path="/estudiante" element= {< NuevoEstudiante/>}/>
      <Route path="/estudiante/:estudiantesId" element= {< EditarEstudiante/>}/>
      <Route path="/estudiante/calificaciones/:matriculaId" element= {< CalificacionesEstudiante/>}/>
    </Routes>  

  )



}
