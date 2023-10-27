import { Layout, List } from "jhon-test-design-system";
import { useTranslation } from "jhon-test-utils";

import useProductsStore from "../stores/useProduct";
import { useEffect, useState } from "react";

function App() {
  const {
    t,
    // i18n: { changeLanguage },
  } = useTranslation();

  // const [currentLanguage, setCurrentLanguage] = useState("pt-br");

  // const handleChangeLanguage = () => {
  //   const languageUri = currentLanguage === "pt-br" ? "en-us" : "pt-br";
  //   const languageKey = currentLanguage === "pt-br" ? "enUs" : "ptBr";

  //   setCurrentLanguage(languageUri);
  //   changeLanguage(languageKey);
  // };

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

  const { products, loading, getProducts, pagination, setPagination } =
    useProductsStore();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getProducts(search, pagination);
  }, [getProducts, search, pagination?.pageSize, pagination?.page]);

  return (
    <>
      <Layout items={routesBreadcrumb} onSearch={(value) => setSearch(value)}>
        {search ? (
          <h1 style={{ color: "burlywood" }}>
            Resultados para: <b>{search}</b>
          </h1>
        ) : null}
        <List
          header={
            <span>
              <b>2</b> produtos encontrados
            </span>
          }
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
