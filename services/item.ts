import getProducts from "./storeservice";

// export async function getPathsFromTitle() {
//   const items = await getProducts();

//   return items.map((item) => {
//     return {
//       params: {
//         id: convertToPath(item.title),
//       },
//     };
//   });
// }


export async function getPathsFromId() {
  const items = await getProducts();

  return items.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

export async function getItemData(id:string) {
  const items = await getProducts();
  const product = items.find((item) => item.id.toString()=== id);
  return product

}

export function convertToPath(title: string) {
  return title.toLowerCase().replace(/\s/g, "-");
}
