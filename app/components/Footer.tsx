'use client'

import { Center, Divider, HStack, Text, IconButton, Box, List, ListItem, Spacer } from "@chakra-ui/react"
import { GiDragonfly } from "react-icons/gi";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoFacebook, IoIosCheckmarkCircle } from "react-icons/io";

export default function Footer() {

  return (
    <div>
    <HStack spacing='50px' bg='#beae956e' padding='20px 0'>
    <Spacer />
      <Box>
        <IconButton as='a' href='#'
           fontSize='20px' bg='#e3dcd1'
          _hover={{ color: "#f456a6"}} 
          aria-label='Lista de deseos' 
          icon={<IoLogoInstagram />} 
        />
        <IconButton  as='a' href='#'
           fontSize='20px' bg='#e3dcd1'
          _hover={{ color: "#f456a6"}} 
          aria-label='Lista de deseos' 
          icon={<IoLogoFacebook  />} 
        />
        <Text>MarjoDress</Text>
      </Box>
      <Box>
        <IconButton 
           fontSize='20px' bg='#e3dcd1'
          _hover={{ color: "#f456a6"}} 
          aria-label='Lista de deseos' 
          icon={<IoLogoWhatsapp  />} 
        />
        <Text>WhatsApp</Text>
      </Box>
      <Box>
        <List spacing={3}>
          <Text textAlign='center' fontWeight='bold'>FAQ</Text>
          <ListItem as='a' href='#' >
            <IconButton 
               fontSize='20px' bg='#e3dcd1'
              _hover={{ color: "#f456a6"}} 
              aria-label='Lista de deseos' 
              icon={<IoIosCheckmarkCircle  />} 
            />
            Shipping & size
          </ListItem>
          <ListItem as='a' href='#'>
            <IconButton 
               fontSize='20px' bg='#e3dcd1'
              _hover={{ color: "#f456a6"}} 
              aria-label='Lista de deseos' 
              icon={<IoIosCheckmarkCircle  />} 
            />
             Return & exchange
          </ListItem>
        </List>
      </Box>
      <Box>
      <List spacing={3}>
          <Text textAlign='center' fontWeight='bold'>Information</Text>
          <ListItem as='a' href='#'>
            <IconButton 
               fontSize='20px' bg='#e3dcd1'
              _hover={{ color: "#f456a6"}} 
              aria-label='Lista de deseos' 
              icon={<IoIosCheckmarkCircle  />} 
            />
            About us
          </ListItem>
          <ListItem as='a' href='#'>
            <IconButton 
               fontSize='20px' bg='#e3dcd1'
              _hover={{ color: "#f456a6"}} 
              aria-label='Lista de deseos' 
              icon={<IoIosCheckmarkCircle  />} 
            />
            Track your package
          </ListItem>
        </List>
      </Box>
      <Spacer />
    </HStack>
    <Divider />
    <Center bg='#beae956e' padding=' 20px 0'>
      <IconButton 
         fontSize='20px' bg='#e3dcd1'
        _hover={{ color: "#f456a6"}} 
        aria-label='Lista de deseos' 
        icon={<GiDragonfly  />} 
      />
      <Text>Yovanamatag</Text>
    </Center>
    </div>
  )
}
