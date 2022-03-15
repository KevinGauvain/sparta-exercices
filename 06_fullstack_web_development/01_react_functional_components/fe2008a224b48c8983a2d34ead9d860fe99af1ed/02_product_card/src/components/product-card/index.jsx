import React from "react";
import CardHeader from "../../../src/components/product-card/header";
import CardBody from "../../../src/components/product-card/body";
import CardFooter from "../../../src/components/product-card/footer";
import zelda from "../../../data/zelda";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader productName={props.product.name} platformsLogos={props.product.platforms} />
      {/* <CardBody product={zelda} />
      <CardFooter product={zelda} /> */}
    </div>
  );
};

export default ProductCard;
