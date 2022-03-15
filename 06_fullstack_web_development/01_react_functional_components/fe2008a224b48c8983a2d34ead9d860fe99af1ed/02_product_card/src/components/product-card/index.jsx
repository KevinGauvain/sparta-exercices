import React from "react";
import CardHeader from "../../../src/components/product-card/header";
import CardBody from "../../../src/components/product-card/body";
import CardFooter from "../../../src/components/product-card/footer";
import zelda from "../../../data/zelda";

const ProductCard = (zelda) => {
  return (
    <div>
      <CardHeader props={zelda} />
      <CardBody props={zelda} />
      <CardFooter props={zelda} />
    </div>
  );
};

export default ProductCard;
