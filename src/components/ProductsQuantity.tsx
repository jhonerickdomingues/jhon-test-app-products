import { useTranslation } from "jhon-test-utils";
import useProductsStore from "../stores/useProduct";

const ProductsQuantity = () => {
  const { pagination } = useProductsStore();
  const {
    t,
    // i18n: { changeLanguage },
  } = useTranslation();

  return (
    <span>
      <b>{pagination?.total}</b> {t("PRODUCTS_FOUND")}.
    </span>
  );
};

export default ProductsQuantity;
