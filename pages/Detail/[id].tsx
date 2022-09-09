import { Stack, Box, Container } from "@chakra-ui/react";
import ItemDetail from "components/itemDetail/ItemDetail";
import SwiperImage from "components/swiperImage/SwiperImage";
import Product from "interfaces/Product";
import { useEffect } from "react";
import { getItemData, getPathsFromTitle } from "services/item";

interface Props {
  productInfo:{data:Product}
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
          <SwiperImage title={productInfo.data.title} image={productInfo.data.image} />
        </Box>
        <Box w={["100%", "50%"]}>
          <ItemDetail product={productInfo.data} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Detail;

export async function getStaticPaths() {
  const paths = await getPathsFromTitle();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id:number = params.id;
  const productInfo = await getItemData(id);

  return {
    props: {
      productInfo,
    },
  };
}
