'use client'

import { Image, Center, IconButton, Grid, GridItem  } from "@chakra-ui/react";
import { IoMdLogIn } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GrUserFemale } from "react-icons/gr";
import { PiListHeartBold } from "react-icons/pi";
export default function Header() {

  return (
      <Grid minWidth='max-content'
        templateAreas={`"logo inf"`}
        gridTemplateColumns={{
          base: '1fr 1fr',
          md: '4fr 1fr',
          lg: '5fr 1fr'
        }}>
        <GridItem area={'logo'} as='a' href='/'>
          <Center>
            <Image
              w='auto' h='50px' margin='20px 0'
              objectFit='cover'
              src='https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/Logo-Zflv75IKflwWF5R4GkzcdOFmHoznuD.png'
              alt='Logo MarjoDress'
            />
          </Center>
        </GridItem>
        <GridItem area={'inf'} marginTop='2em'>
          <Center>
              <IconButton 
                bg='#FFFFFF' fontSize='20px' 
                _hover={{ background: "white", color: "#f456a6"}} 
                aria-label='Lista de deseos' 
                icon={<PiListHeartBold  />} 
              />
              <IconButton 
                bg='#FFFFFF' fontSize='20px' 
                _hover={{ background: "white", color: "#f456a6"}} 
                aria-label='Usuario' 
                icon={<GrUserFemale  />} 
              />
              <IconButton 
                bg='#FFFFFF' fontSize='30px' 
                _hover={{ background: "white", color: "#f456a6"}} 
                aria-label='Notificaciones' 
                icon={<LiaShoppingBagSolid  />} 
              />
              <IconButton 
                bg='#FFFFFF' fontSize='20px' 
                _hover={{ background: "white", color: "#f456a6"}} 
                aria-label='sign out' 
                icon={<IoMdLogIn />} 
              />
          </Center>
        </GridItem>
      </Grid  >
  )
}
