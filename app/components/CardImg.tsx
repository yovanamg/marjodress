'use client'
import { CardBody, Card, Flex, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import PropTypes from "prop-types";

export default function CardImg(vestidos: any) {
  const array = vestidos.vestidos;
  return (
    <div>
      <Grid
        templateColumns={{
          base: 'repeat(2, 2fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(4, 1fr)'
        }} gap='20px' margin='20px 50px'>
        {array.map((item: { codigo: string, vestido_id: number, img: string, precio: string, nombre: string, talla: string, color: string}) => (
        
          <GridItem key={item.vestido_id} as='a' href={`/allbrands/${item.vestido_id}`}>
            <Card maxW='sm'>
              <CardBody>
                <Image
                    src={item.img}
                    alt={item.nombre}
                    borderRadius='lg'
                />
                <Stack mt='3' spacing='3' >
                    <Heading color='#9d5942' size='xs'>{item.nombre}</Heading>
                    <Flex w='100%'>
                      <Text w='80%' fontSize='14px'><strong>Talla</strong> {item.talla}</Text>
                      <Text w='20%'  color='#c09fa6' fontSize='16px' fontWeight='bold'>
                          ${item.precio}
                      </Text>
                    </Flex>
                    
                </Stack>
              </CardBody>
              <Divider color='#c09fa6'/>
              <CardFooter padding='10px' fontSize='16px'>
                  <ButtonGroup spacing='2'>
                      <Button variant='solid' bg='#c09fa6' color='white'>
                          Comprar
                      </Button>
                      <Button variant='ghost' color='#c09fa6'>
                          Agregar al Carrito
                      </Button>
                  </ButtonGroup>
              </CardFooter>
            </Card>
            </GridItem>
      ))}  
      </Grid>  
    </div>
  )
}

CardImg.propTypes = {
  vestidos: PropTypes.array,
};