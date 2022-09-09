import {
  Box,
  Grid,
  Container,
  Image,
  Flex,
  Text,
  calc,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Product from "../../interfaces/Product";
import Item from "components/item/item";
import { useShoping } from "context/context";
import NotFoundProducts from "components/notFoundProducts/NotFoundProducts";

interface ProductsList {
  products: Product[];
}
const List = ({ products }: ProductsList) => {
  return (
    <Box p={4} mt={["0.5rem"]}>
      <Container
        // backgroundColor="white"
        // borderRadius="sm"
        // boxShadow="md"
        maxWidth="container.lg"
        // padding={4}
      >
        {products.length > 0 ? (
          <motion.ul
            animate="show"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
          >
            <Grid
              gridGap={6}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {products.map((product: Product) => (
                <Item key={product.id} product={product} />
              ))}
            </Grid>
          </motion.ul>
        ) : (
          <NotFoundProducts />
        )}
      </Container>
    </Box>
  );
};

export default List;
