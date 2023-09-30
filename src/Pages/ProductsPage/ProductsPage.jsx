import React from "react";
import { phcartItems } from "../../Context/Context";
import { Stack } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { GlobalStateContext } from "../../Context/Context";
import { useContext } from "react";
import { preworkoutArr } from "../../utils/DummyData.jsx";
import useFetch from "../../utils/useFetch.jsx";

//pretteir-ignore

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const { stateforCart, setStateforCart, addToCart } =
    useContext(GlobalStateContext);
  const category = useParams();

  const { data, loading, error } = useFetch("http://localhost:8800/api/product/");
  console.log(data);

  useEffect(() => {
    window.scroll({
      top: 0,
    })
  }, [])

  return (
    <>
      <Stack alignItems="center" sx={{ fontSize: "20px", color: "#4c7abb" }}>
        <h1>{category.category.toUpperCase()}</h1>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        spacing={7}
        sx={{ width: "100%", padding: "0px 50px" }}
      >
        {category.category === "preworkout" ||
        category.category === "whey-protein" ||
        category.category === "accessories" ||
        category.category === "kettlebells" ||
        category.category === "dumbbells" ||
        category.category === "resistant-bands"
          ? data
              .filter((item) => item.category === category.category)
              .map((item) => <ProductCard key={item.id} props={item} />)
          : category.category === "equipment"
          ? data
              .filter((item) => item.type === "equipment")
              .map((item) => <ProductCard key={item.id} props={item} />)
          : category.category === "Supplement"
          ? data
              .filter((item) => item.type === "Supplement")
              .map((item) => <ProductCard key={item.id} props={item} />)
          : null}
      </Stack>
    </>
  );
};
export default ProductsPage;
