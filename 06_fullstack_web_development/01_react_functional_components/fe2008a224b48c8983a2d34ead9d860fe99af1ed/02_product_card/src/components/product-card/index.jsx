import React from "react";
import CardHeader from "../../../src/components/product-card/header";
import CardBody from "../../../src/components/product-card/body";
import CardFooter from "../../../src/components/product-card/footer";
// import zelda from "../../../data/zelda";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader
        name={props.product.name}
        platformLogos={props.product.platforms.map((element) => element.platform_logo.url)}
      />
      <CardBody
        cover={props.product.cover.url}
        summary={props.product.summary}
        genres={props.product.genres.map((element) => element.name)}
        screenshots={props.product.screenshots}
        firstReleaseDate={props.product.first_release_date}
      />
      <CardFooter slug={props.product.slug} />
    </div>
  );
};

export default ProductCard;
