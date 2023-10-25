import { Layout, List } from "jhon-test-design-system";
import { useTranslation } from "jhon-test-utils";

import useProductsStore from "./stores/useProduct";
import { useEffect, useState } from "react";

function App() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("pt-br");

  const handleChangeLanguage = () => {
    const languageUri = currentLanguage === "pt-br" ? "en-us" : "pt-br";
    const languageKey = currentLanguage === "pt-br" ? "enUs" : "ptBr";

    setCurrentLanguage(languageUri);
    changeLanguage(languageKey);
  };

  const routesBreadcrumb = [
    {
      title: t("LANGUAGE"),
      menu: {
        items: [
          {
            title: "pt-br",
          },
          {
            title: "en-us",
          },
        ],
      },
    },
    {
      title: "Products",
    },
  ];

  const { products, loading, getProducts } = useProductsStore();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getProducts(search);
    console.log(123, t("LANGUAGE"));
  }, [getProducts, search]);

  return (
    <>
      <Layout
        items={routesBreadcrumb}
        onSearch={(value) => handleChangeLanguage()}
      >
        <List loading={loading} dataSource={products} />
      </Layout>
    </>
  );
}

export default App;
