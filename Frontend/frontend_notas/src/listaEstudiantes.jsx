import { useState, useEffect } from "react";
import * as API from './services/data'
import { Link } from "react-router-dom";
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaEdit, FaStickyNote, FaTrashAlt } from "react-icons/fa";




export function ListaEstudiantes(){

    let usuario = sessionStorage.getItem("usuario");
    const [estudiantes, setEstudiantes] = useState([]);
    useEffect(() => {
        API.getEstudiantes(usuario).then(setEstudiantes);
    })

    function eliminarEstudiante(id){
        API.eliminarEstuadiante(id).then(resultado => {
            if(resultado == "true"){
                Swal.fire({
                title: "¡Que bien!",
                text: "Estudiante eliminado con exito",
                icon: "success"
                });
            }
            else{
                Swal.fire({
                title: "Error",
                text: "Error al eliminar el alumno",
                icon: "error"
                });
            }
        });
    }

    return(
        <>
            <Box m='50px'>
                <TableContainer>
                    <Table size='md' variant='striped' backgroundColor='#e5c5f4' borderRadius='md' >
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Identificación</Th>
                                <Th>Nombre</Th>
                                <Th>Dirección</Th>
                                <Th>Edad</Th>
                                <Th>Email</Th>
                                <Th>Asignatura</Th>
                                <Th>Editar</Th>
                                <Th>Calificar</Th>
                                <Th>Eliminar</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                estudiantes?.map(estudiantes =>(
                                    <Tr key={estudiantes.id}>
                                        <Td>{estudiantes.id} </Td>        
                                        <Td>{estudiantes.identificacion} </Td>  
                                        <Td>{estudiantes.nombre} </Td>  
                                        <Td>{estudiantes.direccion} </Td>  
                                        <Td>{estudiantes.edad} </Td>  
                                        <Td>{estudiantes.email} </Td>  
                                        <Td>{estudiantes.asignatura} </Td> 
                                        <Td><Link to={'/estudiante/' +estudiantes.id}> <FaEdit /> </Link></Td>
                                        <Td> <Link to={'/estudiante/calificaciones/'+estudiantes.matriculaId}> <FaStickyNote /> </Link> </Td>
                                        <Td cursor={'pointer'} onClick={() => eliminarEstudiante(estudiantes.id)}> <FaTrashAlt /> </Td>  
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}