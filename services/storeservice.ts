import Product from "interfaces/Product";
import { businessType } from "utils/ownerData";
import { supabase } from "../client/supabase";

const getProducts = async (): Promise<Product []> => {
  // const user = supabase.auth.user();

  try {
    const { error, data } = await supabase
      .from("muestra")
      .select("id, title,description,price,category, image, boost")

      .eq("userId", businessType);

    // .order("id", { ascending: false });

    if (error) {
      throw error;
    }
    console.log("data: ", data);
    return data;
  } catch (error) {
    // alert(error.error_description || error.message);
  }
};

export default getProducts;
