'use client'
import { Box, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
export default function Options() {

  return (
    <HStack direction={['column', 'row']} spacing='50px' margin='15px 0' fontWeight="bold">
      <Spacer />
        <Box as='a' href='#'>
          ALL BRANDS
        </Box>
        <Box>
          <Menu>
            <MenuButton fontWeight="bold">OCCASIONS</MenuButton>
            <MenuList>
                <MenuItem as='a' href='#'>
                  PROM
                </MenuItem>
                <MenuItem as='a' href='#'>
                  EVENING
                </MenuItem>
                <MenuItem as='a' href='#'>
                  XV
                </MenuItem>
                <MenuItem as='a' href='#'>
                  NIGHT OUT
                </MenuItem>
                <MenuItem as='a' href='#'>
                  CURVE PLUS
                </MenuItem>
                <MenuItem as='a' href='#'>
                  BRIDESMAID
                </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box as='a' href='#'>
          WEDDING
        </Box>
        <Box as='a' href='#'>
          BRIDESMUSE
        </Box>
        <Box as='a' href='#'>
            OUTLET
        </Box>
      <Spacer />
    </HStack>
  )
}
