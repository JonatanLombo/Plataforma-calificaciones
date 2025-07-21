import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Flex, HStack, Box, Image } from "@chakra-ui/react";
import logo from './assets/icono2.png';


export function Header(){

    const navigate = useNavigate();
    
    function cerrarSesion(){
    sessionStorage.removeItem("usuario");
    navigate("/");
    }

    return(
        <>
            <Flex w='100%' h='70px' p='6px' aling='center' justify='space-between' bgColor='#633777' color='white' >
                <HStack as='nav' spacing='10px' >
                    <Image src={logo} h='50px' ml='6px'></Image>    
                    <Link to={'/dashboard'}><Box _hover={{color: "#e5c5f4"}} >Listado</Box></Link>
                    <Link to={'/estudiante'}><Box _hover={{color: "#e5c5f4"}} >Nuevo</Box></Link>
                </HStack>   
                <HStack> 
                   <Box mr='20px' cursor='pointer' _hover={{color: "#e5c5f4"}} onClick={() => cerrarSesion()} >Cerrar sesión</Box>
                </HStack>    
            </Flex>
        
        </>
    )
}