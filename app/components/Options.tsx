'use client'
import { GridItem, Grid } from "@chakra-ui/react";
export default function Options() {

  return (
    <Grid 
      margin={{
        base: '15px 0',
        md: '15px 0',
        lg: '15px 7em' 
    }} fontWeight="bold" textAlign='center'
    templateColumns={{
      base: 'repeat(2, 1fr)',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(4, 1fr)'
    }}>
        <GridItem as='a' href='/allbrands'>
          ALL BRANDS
        </GridItem>
        <GridItem as='a' href='/wedding'>
          WEDDING
        </GridItem>
        <GridItem as='a' href='/bridesmuse'>
          BRIDESMUSE
        </GridItem>
        <GridItem as='a' href='/outlet'>
            OUTLET
        </GridItem>
    </Grid>
  )
}
