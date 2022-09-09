import { Flex, IconButton,Image } from '@chakra-ui/react'
import MenuComponent from 'components/menu/MenuCatDesktop'

import { useShoping } from 'context/context'
import { useRouter } from 'next/router'
import React from 'react'
import { showLogoType } from 'utils/ownerData'


const LeftHeaderComponent = () => {

  const { setproductsState, stateProducts} = useShoping()

  const router = useRouter();
  const logoFunction = () => {
    if (router.asPath === "/") {
      setproductsState((prev) => ({ ...prev, filteredProducts: prev.products }));
    } else {
      router.push("/");


    }
  };
  return (
    <Flex align={"center"} direction={["column", "row"]}>
      <IconButton
        aria-label={""}
        borderRadius={"full"}
        mr={["0", "2rem"]}
        boxSize={["6rem", "7rem"]}
        onClick={logoFunction}
        _focusVisible={{ boxShadow: "none" }}
      >
        <Image src={showLogoType} alt="logo" />
      </IconButton>
      {stateProducts && <MenuComponent />}
    </Flex>
  );
}

export default LeftHeaderComponent
