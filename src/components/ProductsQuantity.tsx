type ProductsQuantityType = {
  quantity: number;
};

const ProductsQuantity = ({ quantity }: ProductsQuantityType) => {
  return (
    <span>
      <b>{quantity}</b> encontrados.
    </span>
  );
};

export default ProductsQuantity;
