import Product from "interfaces/Product";



export default {
  list: async (): Promise<Product[]> => {
    return[]

    // axios
    //   .get(process.env.URL_EXCEL, {
    //     responseType: "blob",
    //   })
    //   .then(
    //     (response) =>
    //       new Promise<Product[]>((resolve, reject) => {
    //         Papa.parse(response.data, {
    //           header: true,
    //           complete: (results) => {
    //             const products = results.data as Product[];

    //             // return resolve(
    //             //   products.map((product) => ({
    //             //     ...product,
    //             //     price: Number(product.price),
    //             //     image: responseUrl(product.image),
    //             //   })),
    //             // );
    //           },
    //           error: (error) => reject(error.message),
    //         });
    //       }),
    //   );
  },
};
