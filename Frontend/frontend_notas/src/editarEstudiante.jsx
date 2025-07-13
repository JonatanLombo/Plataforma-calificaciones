import { useParams } from "react-router-dom"
import { Header } from "./header"
import { useEffect, useState } from "react";
import * as API from './services/data'
import { Center, Box, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function EditarEstudiante(){

    let params = useParams();
    const [estudiante, setEstudiante] = useState([])
    useEffect(() => {
        API.estudiantePorId(params.estudiantesId).then(setEstudiante);
    },[])

    function handleSubmit (e){
        e.preventDefault();
        API.editarEstudiante(estudiante).then(result => {
            if(result == "true"){
                Swal.fire({
                title: "¡Que bien!",
                text: "Alumno modificado correctamente",
                icon: "success"
                });
            }
            else{
                Swal.fire({
                title: "Error",
                text: "Error al modificar los datos",
                icon: "error"
                });
            }
        })
    }


    return(
        <> 
            <Header />
            <Center>
             <Box m='40px' boxShadow='x1' borderRadius='md' width='40%' id="caja" >
                <Box textAlign='center' > 
                    <Heading>Editar Alumno</Heading> 
                </Box>
                <Box p='20px'>    
                <form id="formulario" onSubmit={handleSubmit}>
                    <FormControl mt='3px' >
                        <FormLabel>Identificacion</FormLabel>
                        <Input type="text" id="identificacion" required disabled value={estudiante.identificacion} />
                    </FormControl>
                    <FormControl mt='3px'>
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" id="nombre" required value={estudiante.nombre} onChange={event => setEstudiante ({...estudiante, nombre:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3px'>
                        <FormLabel>Direccion</FormLabel>
                        <Input type="text" id="direccion" required value={estudiante.direccion} onChange={event => setEstudiante ({...estudiante, direccion:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3px'>
                        <FormLabel>Edad</FormLabel>
                        <Input type="number" id="edad" required value={estudiante.edad} onChange={event => setEstudiante ({...estudiante, edad:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3px'>
                        <FormLabel>Email</FormLabel>
                        <Input type="text" id="email" required value={estudiante.email} onChange={event => setEstudiante ({...estudiante, email:event.target.value})} />
                    </FormControl>
                    <FormControl>
                        <Input type="submit" id="editar" value='Editar' mt='20px' backgroundColor='#633777' color='white' borderRadius='md' cursor={'pointer'} />
                    </FormControl>
                </form>
                </Box>
             </Box>
            </Center>
        </>
    )

}