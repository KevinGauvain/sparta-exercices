type Product = {
  productName: string;
  quantity: number;
};

function productTransformer(toto: Product): [string, string | number][] {
  return Object.entries(toto);
}

// Leave the line below for tests to work properly.
export { productTransformer };
