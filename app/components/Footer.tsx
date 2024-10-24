'use client'

import { Center, Divider, Grid, Text, IconButton, GridItem, List, ListItem, Spacer } from "@chakra-ui/react"
import { GiDragonfly } from "react-icons/gi";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoFacebook, IoIosCheckmarkCircle } from "react-icons/io";

export default function Footer() {

  return (
    <div>
    <Grid textAlign='center'
    templateColumns={{
      base: 'repeat(2, 1fr)',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(4, 1fr)'
    }} bg='#beae956e' padding='20px 0'>
      <GridItem>
        <IconButton as='a' href='www.instagram.com/marjodress'
           fontSize='20px' bg='#e3dcd1'
          _hover={{ color: "#f456a6"}} 
          aria-label='Lista de deseos' 
          icon={<IoLogoInstagram />} 
        />
        <IconButton  as='a' href='www.facebook.com/marjodress'
           fontSize='20px' bg='#e3dcd1'
          _hover={{ color: "#f456a6"}} 
          aria-label='Lista de deseos' 
          icon={<IoLogoFacebook  />} 
        />
        <Text>MarjoDress</Text>
      </GridItem>
      <GridItem>
        <IconButton as='a' href='wa.me/6672670004'
           fontSize='20px' bg='#e3dcd1'
          _hover={{ color: "#f456a6"}} 
          aria-label='Lista de deseos' 
          icon={<IoLogoWhatsapp  />} 
        />
        <Text>WhatsApp</Text>
      </GridItem>
      <GridItem>
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
      </GridItem>
      <GridItem>
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
      </GridItem>
      <Spacer />
    </Grid>
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
