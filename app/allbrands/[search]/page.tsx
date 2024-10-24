import { Card, Divider, Center, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { sql } from "@vercel/postgres";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Products from '@/app/components/Products';

export default async function Producto({params}: {params: {search: string}}) {
  console.log('entro aca', params.search)
  const vestido  = await sql`SELECT * FROM vestidos WHERE vestido_id = ${params.search}`;
  const item = vestido.rows[0];
  return (
    <div>
      <Header />
      <Divider />
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w='50%' margin='5% auto'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={item.img}
            alt={item.nombre}
        />

        <Stack>
            <CardBody>
            <Heading size='md'>{item.nombre}</Heading>
            <Text py='2'>
                Vestido perfecto para acompañarte en tu evento especial y luzcas una figura hermosa!
            </Text>
            <Stack mt='3' spacing='3' >
                  <Heading color='#9d5942' size='xs'>{item.nombre}</Heading>
                  <Flex w='100%' color='#9d5942'>
                    <Text fontSize='14px'><strong>Color</strong> {item.color}</Text>
                  </Flex>
                  <Flex w='100%' color='#9d5942'>
                    <Text w='80%' fontSize='14px'><strong>Talla</strong> {item.talla}</Text>
                    <Text w='20%'  color='#c09fa6' fontSize='16px' fontWeight='bold'>
                        ${item.precio}
                    </Text>
                  </Flex>
                  
              </Stack>
            </CardBody>

            <CardFooter alignContent='right'>
              <Center>
              <Button variant='solid' bg='#c09fa6' color='white' >
                Comprar
            </Button>
              </Center>
            </CardFooter>
        </Stack>
    </Card> 
    <Products />
    <Footer />
    </div>
  )
}