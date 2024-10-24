'use client'
import { Image, HStack, Box } from "@chakra-ui/react";

export default function Banner() {

  return (
    <HStack  margin='20px 0' gap='0' >
        <Box as='a' href='#'>
            <Image
                boxSize='100%'
                objectFit='cover'
                src='https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/cd_bbn_onlinecatalog-4HOmFuKSrJ3idLOZwJuU27vszt4UTU.jpg'
                alt='Banner informativo.'
            />
        </Box>
        <Box as='a' href='#'>
            <Image
                boxSize='100%'
                objectFit='cover'
                src='https://nbklhhmeoiogsq5n.public.blob.vercel-storage.com/imagenes/whatsapp_2024-w8F3ShpVME6y3xx3H2LK7B2lffMUX7.jpg'
                alt='Banner WhatsApp'
            />
        </Box>
    </HStack>
  )
}
