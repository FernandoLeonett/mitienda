import { Stack, Box, Container } from "@chakra-ui/react";
import ItemDetail from "components/itemDetail/ItemDetail";
import SwiperImage from "components/swiperImage/SwiperImage";
import Product from "interfaces/Product";
import { useEffect } from "react";
import { getItemData, getPathsFromId } from "services/item";

interface Props {
  productInfo: Product
}

const Detail = ({ productInfo }: Props) => {


useEffect(() => {
console.log('productInfo', productInfo);
  }
, [])

  return (
    <Container maxWidth={"container.lg"} p={5}>
      <Stack
        direction={["column", "column", "row"]}
        align={"center"}
        spacing={["1rem", "1rem", "3rem"]}
      >
        <Box w={["100%", "45%"]}>
          <SwiperImage title={productInfo.title} image={productInfo.image} />
        </Box>
        <Box w={["100%", "50%"]}>
          <ItemDetail product={productInfo} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Detail;

export async function getStaticPaths() {
  //  const paths = await getPathsFromTitle();
  const paths = await getPathsFromId()

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const productInfo = await getItemData(id);

  return {
    props: {
      productInfo,
    },
  };
}
