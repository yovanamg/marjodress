'use client'

import { Box, HStack, Image, Center, IconButton } from "@chakra-ui/react";
import { IoMdLogIn } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GrUserFemale } from "react-icons/gr";
import { PiListHeartBold } from "react-icons/pi";
export default function Header() {

  return (
    <HStack>
      <HStack w='100%' h='70px'>
        <Box w='90%'>
          <Center>
            <Image 
              w='auto' h='50px' margin='20px 0'
              objectFit='cover'
              src='https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/Logo-Zflv75IKflwWF5R4GkzcdOFmHoznuD.png'
              alt='Logo MarjoDress'
            />
          </Center>
        </Box>
        <Box w='2%'>
          <IconButton 
            bg='#FFFFFF' fontSize='20px' 
            _hover={{ background: "white", color: "#f456a6"}} 
            aria-label='Lista de deseos' 
            icon={<PiListHeartBold  />} 
          />
        </Box>
        <Box w='2%'>
          <IconButton 
              bg='#FFFFFF' fontSize='20px' 
              _hover={{ background: "white", color: "#f456a6"}} 
              aria-label='Usuario' 
              icon={<GrUserFemale  />} 
            />
        </Box>
        <Box w='2%'>
          <IconButton 
            bg='#FFFFFF' fontSize='30px' 
            _hover={{ background: "white", color: "#f456a6"}} 
            aria-label='Notificaciones' 
            icon={<LiaShoppingBagSolid  />} 
          />
        </Box>
        <Box w='2%' marginRight='2%'>
          <IconButton 
            bg='#FFFFFF' fontSize='20px' 
            _hover={{ background: "white", color: "#f456a6"}} 
            aria-label='sign out' 
            icon={<IoMdLogIn />} 
          />
        </Box>
      </HStack>
  </HStack>
  )
}
