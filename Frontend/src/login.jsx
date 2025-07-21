import { useState } from 'react'
import * as API from './services/data';
import img1 from './assets/calificaciones2.jpg';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, FormControl, FormLabel, Input, Center } from '@chakra-ui/react';


export function Login(){
    const [teacher, setTeacher] = useState({usuario:'',password:''});
    const navigate = useNavigate();


      async function handleSubmit(e){
        e.preventDefault();
        const response = await API.login(teacher.usuario, teacher.password);
        if(response.length !=0){
          sessionStorage.setItem("usuario",response);
          navigate('/dashboard');
        } 
        else{
          Swal.fire({
          title: "Error",
          text: "Error al momento de iniciar sesión",
          icon: "error"
          });
        }
      }
    
    
      return (
        <>
          <Center>
            <img src={img1} alt="Imagen que hace referencia a calificaciones" />
          </Center>
          <Center>
            <Box m='2%' boxShadow='x1' borderRadius='md' width='40%' id='caja'>
              <Box textAlign='center'>
                <Heading>Iniciar sesión</Heading>
              </Box>
              <Box p='20px' >
                <form id='formulario' onSubmit={handleSubmit}>
                  <FormControl mt='3px'>
                    <FormLabel>Usuario</FormLabel>
                    <Input required type="text" id='usuario' onChange={event => setTeacher({...teacher,usuario:event.target.value})} />
                  </FormControl>
                  <FormControl mt='3px'>
                    <FormLabel>Password</FormLabel>
                    <Input required type="password" id='pass' onChange={event => setTeacher({...teacher,password:event.target.value})} />
                  </FormControl>
                   <FormControl mt='3px'>
                    <FormLabel>Password</FormLabel>
                    <Input type="submit" mt='3px' id='enviar' borderColor='teal' value='Login' />
                  </FormControl>
                </form>
              </Box>
            </Box>
          </Center>
        </>
      )
}
