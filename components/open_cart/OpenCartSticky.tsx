import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";
// import {CgShoppingBag}  from "react-icons/cg";
import { useShoping } from "../../context/context";
import useCart from "../../hooks/useCart";

const OpenCartSticky = () => {
  const { onOpenCart } = useShoping();
  const { getNumberOfItems } = useCart();
  return (
    <Flex
      position="sticky"
      justifyContent={"center"}
      mr={["1rem", "2rem"]}
      mb={"1rem"}
      bottom={4}
    >
      <Button
        onClick={onOpenCart}
        leftIcon={<BsFillCartCheckFill size={"2rem"} />}
        width="fit-content"
        background={"primary.400"}
        colorScheme="primary"
        >
        <Text>{getNumberOfItems()} artículos</Text>
        {/* <Text>{cart.length} producto/s en tu bolsa de compras</Text> */}
      </Button>
    </Flex>
  );
};

export default OpenCartSticky;
