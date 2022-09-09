import axios from "axios";
import Papa from "papaparse";

import Product from "../interfaces/Product";
import { responseUrl } from "../utils/helper";

function apiExcel(url) {
  return axios
    .get(url, {
      responseType: "blob",
    })
    .then(
      (response) =>
        new Promise<Product[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const products = results.data as Product[];

              return resolve(
                products.map((product) => ({
                  ...product,
                  price: Number(product.price),
                  image: responseUrl(product.image),
                }))
              );
            },
            error: (error) => reject(error.message),
          });
        })
    );
}
export default apiExcel
