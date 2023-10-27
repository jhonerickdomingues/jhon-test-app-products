import { Layout, List } from "jhon-test-design-system";
import { useTranslation } from "jhon-test-utils";

import useProductsStore from "../stores/useProduct";
import { useEffect, useState } from "react";
import ProductsQuantity from "../components/ProductsQuantity";
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  const params = useParams();
  const navigation = useNavigate();

  const handleChangeLanguage = (lang: string) => {
    const languageKey = lang === "pt-br" ? "ptBr" : "enUs";

    changeLanguage(languageKey);

    navigation(`/${lang}`);
  };

  const languagesMap: { [key: string]: string } = {
    ptBr: "Portugues",
    enUs: "English",
    "pt-br": "ptBr",
    "en-us": "enUs",
  };

  const routesBreadcrumb = [
    {
      title: `${t("LANGUAGE")}: ${languagesMap[language]}`,
      menu: {
        items: [
          {
            title: "Portugues",
            onClick: () => handleChangeLanguage("pt-br"),
          },
          {
            title: "English",
            onClick: () => handleChangeLanguage("en-us"),
          },
        ],
      },
    },
    {
      title: t("PRODUCTS"),
    },
  ];

  const { products, loading, getProducts, pagination, setPagination } =
    useProductsStore();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (params.language) changeLanguage(languagesMap[params.language]);
  }, []);

  useEffect(() => {
    getProducts(search, pagination);
  }, [getProducts, search, pagination?.pageSize, pagination?.page]);

  return (
    <>
      <Layout items={routesBreadcrumb} onSearch={(value) => setSearch(value)}>
        {search ? (
          <h1 style={{ color: "burlywood" }}>
            {t("RESULTS_FOR")}: <b>{search}</b>
          </h1>
        ) : null}
        <List
          header={<ProductsQuantity />}
          footer={<ProductsQuantity />}
          loading={loading}
          dataSource={products}
          pagination={{
            ...pagination,
            showSizeChanger: true,
            onChange: (page, pageSize) => setPagination?.({ page, pageSize }),
          }}
        />
      </Layout>
    </>
  );
}

export default App;
