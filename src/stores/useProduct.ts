import { create } from "zustand";
import { ProdutsService, PaginationType, ProductType } from "jhon-test-utils";

type Store = {
  pagination?: PaginationType;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  products: Array<ProductType>;
  setProducts: (products: Array<ProductType>) => void;
  getProducts: (search?: string | null) => void;
};

const useProductsStore = create<Store>()((set, get) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  products: [
    // {
    //   nome: "Cama",
    //   descrição: "bed",
    //   preco_promocional: 200,
    //   preco_original: 500,
    //   imagens: [
    //     "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    //     "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
    //     "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    //     "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    //   ],
    //   categoria: "casa",
    // },
    // {
    //   nome: "Coberta",
    //   descrição: "coberta",
    //   preco_promocional: 200,
    //   preco_original: 500,
    //   imagens: [
    //     "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    //     "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
    //     "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    //     "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    //   ],
    //   categoria: "casa",
    // },
    // {
    //   nome: "Coberta",
    //   descrição: "coberta",
    //   preco_promocional: 200,
    //   preco_original: 500,
    //   imagens: [
    //     "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    //     "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
    //     "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    //     "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    //   ],
    //   categoria: "casa",
    // },
  ],
  setProducts: (products) => set({ products }),
  getProducts: async (search) => {
    const { pagination } = get();

    try {
      set({
        loading: true,
      });

      const {
        data: { data },
      } = await ProdutsService.index({ search, ...pagination });

      if (data?.length) {
        set({
          products: data,
        });
      } else {
        set({
          products: [],
        });
      }
    } finally {
      set({
        loading: false,
      });
    }
  },
}));

export default useProductsStore;
