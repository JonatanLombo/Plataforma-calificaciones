import { Header } from "./header";
import { useState } from "react";
import * as API from './services/data';
import { Center, Box, Heading, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

export function NuevoEstudiante(){

    const [estudiante, setEstudiante] = useState({identificacion:'', nombre:'', direccion:'', edad:'', email:'', asignatura:'1'});

    function handleSubmit(e){
        e.preventDefault();
        API.crearEstuadiante(estudiante).then(resultado => {
            if(resultado == "true"){
                Swal.fire({
                title: "¡Que bien!",
                text: "Estudiante creado exitosamente",
                icon: "success"
                });
                document.getElementById("formulario").reset();
            }
            else{
                Swal.fire({
                title: "Error",
                text: "Error al crear el estudiante",
                icon: "error"
                });
            }
        })
    }

    return(
        <>
            <Header/>
            <Center>
                <Box m='40px' boxShadow='x1' borderRadius='md' width='40%' id="caja" >
                    <Box textAlign='center' > 
                        <Heading>Nuevo Alumno</Heading> 
                    </Box>
                    <Box p='20px' >
                        <form id="formulario" onSubmit={handleSubmit}>
                            <FormControl mt='3px'>
                                <FormLabel>Identificacion</FormLabel>
                                <Input type="text" id='identificacion' required onChange={event => setEstudiante({...estudiante,identificacion:event.target.value})} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Nombre</FormLabel>
                                <Input type="text" id='nombre' required onChange={event => setEstudiante({...estudiante,nombre:event.target.value})} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Direccion</FormLabel>
                                <Input type="text" id='direccion' required onChange={event => setEstudiante({...estudiante,direccion:event.target.value})} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Edad</FormLabel>
                                <Input type="number" id='edad' required onChange={event => setEstudiante({...estudiante,edad:event.target.value})} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Email</FormLabel>
                                <Input type="text" id='email' required onChange={event => setEstudiante({...estudiante,email:event.target.value})} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Asignatura</FormLabel>
                                <Select id='asignatura' onChange={event => setEstudiante({...estudiante,asignatura:event.target.value})}>
                                    <option value="1">Matemáticas</option>
                                    <option value="2">Informática</option>
                                    <option value="3">Inglés</option>
                                    <option value="4">Español</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Input type="submit" id="editar" value='Nuevo' mt='20px' backgroundColor='#633777' color='white' borderRadius='md' cursor={'pointer'} />
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Center> 
            
        </>
    )
}