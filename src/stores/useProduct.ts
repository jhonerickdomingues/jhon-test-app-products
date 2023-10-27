import { create } from "zustand";
import { ProdutsService, ProductType } from "jhon-test-utils";

type PaginationType = {
  page?: number;
  pageSize?: number;
  total?: number;
};

type Store = {
  pagination?: PaginationType;
  setPagination?: (pagination: PaginationType) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  products: Array<ProductType>;
  setProducts: (products: Array<ProductType>) => void;
  getProducts: (search?: string | null, pagination?: PaginationType) => void;
};

const useProductsStore = create<Store>()((set, get) => ({
  pagination: {
    page: 1,
    pageSize: 10,
    total: 0,
  },
  setPagination: ({ page, pageSize }) =>
    set({ pagination: { page: page == 0 ? 1 : page, pageSize } }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  products: [],
  setProducts: (products) => set({ products }),
  getProducts: async (search, pagination) => {
    try {
      set({
        loading: true,
      });

      const {
        data: { data, meta },
      } = await ProdutsService.index({ search, ...pagination });

      if (data?.length) {
        set({
          products: data,
          pagination: {
            ...pagination,
            total: meta?.total ? +meta.total : 0,
          },
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
