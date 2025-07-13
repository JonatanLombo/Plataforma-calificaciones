import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from './services/data'
import { Header } from "./header";
import { Box, Center, Badge, Input, TableContainer, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

export function CalificacionesEstudiante(){

    let params = useParams();
    const matriculaId = params.matriculaId;
    const [calificaciones, setCalificaciones] = useState([]);
    const [newCalificacion, setNewCalificacion] = useState([]);

    useEffect(() => {
        API.ponerCalificacion(params.matriculaId).then(setCalificaciones);
    });

    let total = 0;
    calificaciones?.map(calificacion => (
        total = total + calificacion.nota * (calificacion.porcentaje/100)
    ))

    function nuevaCalificacion(){
    
        let detalleDescripcion = document.getElementById("descripcion");
        let detalleNota = document.getElementById("nota");
        let detallePorcentaje = document.getElementById("porcentaje");

        //Se confirma si las variables vienen con algún valor o están vacias
        let validar = detalleDescripcion.value.trim() !== "" && detalleNota.value.trim() !== "" && detallePorcentaje.value.trim() !== "";
        
        if (validar){
            API.nuevaCalificacion(newCalificacion, matriculaId).then(result => {
                if (result == "true"){
                    Swal.fire({
                    title: "¡Que bien!",
                    text: "Calificación agregada",
                    icon: "success"
                    });
                    document.getElementById("descripcion").value = "";
                    document.getElementById("nota").value = "";
                    document.getElementById("porcentaje").value = "";
                }
                else{
                    Swal.fire({
                    title: "Error",
                    text: "Error al momento de generar la calificación",
                    icon: "error"
                    });
                }
            })
        }
    }

    function eliminarCalificacion(id){
        API.eliminarCalificacion(id).then(result => {
            if(result == "true"){
                Swal.fire({
                title: "¡Que bien!",
                text: "Calificación eliminada exitosamente",
                icon: "success"
                });
            }
            else{
                Swal.fire({
                title: "Error",
                text: "Error al momento de eliminar la calificación",
                icon: "error"
                });
            }
        })
    }

    return(
       <>
            <Header />
            <Box m='100px'>
                <TableContainer>
                    <Table size='md' >
                        <Thead>
                            <Tr>
                                <Th>Descripción</Th>
                                <Th>Nota</Th>
                                <Th>Ponderación</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                calificaciones?.map(calificaciones =>
                                (

                                <Tr>
                                    <Td>{calificaciones.descripcion}</Td>
                                    <Td>{calificaciones.nota}</Td>
                                    <Td>{calificaciones.porcentaje}%</Td>
                                    <Td> <FaTrashAlt cursor={'pointer'} onClick={() => eliminarCalificacion(calificaciones.id)} /></Td>
                                </Tr>
                                ))
                            }
                            <Tr>
                                <Td><Input type="text" id="descripcion" placeholder="Agregue una escripción" onChange={event => setNewCalificacion ({... newCalificacion,descripcion:event.target.value})} /></Td>
                                <Td><Input type="number" id="nota" placeholder="Agregue una nota" onChange={event => setNewCalificacion ({... newCalificacion,nota:event.target.value})} /></Td>
                                <Td><Input type="number" id="porcentaje" placeholder="Agregue un porcentaje" onChange={event => setNewCalificacion ({... newCalificacion,porcentaje:event.target.value})} /></Td>
                                <Td><FaCheckCircle cursor={'pointer'} onClick={() => nuevaCalificacion()}/></Td>
                            </Tr>
                        </Tbody>
                    </Table>           
                </TableContainer>
                <Center>
                     <Box mt='10px' fontSize='lg'>Nota Final: <Badge fontSize='large' variant='subtle' colorScheme="green">{total}</Badge> </Box>       
                </Center>
            </Box>
       </> 
    )

}