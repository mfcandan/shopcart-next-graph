import create from "zustand";

export interface IRecommendedProduct {
  src: string;
  alt: string;
}

export interface IProduct {
  ref: any;
  ts: number;
  data: {
    name: string;
    category: string;
    price: number;
    currency: string;
    image: {
      src: string;
      alt: string;
    };
    bestseller: boolean;
    featured: boolean;
    details?: {
      dimmentions: {
        width: number;
        height: number;
      };
      size: number;
      description: string;
      recommendations: IRecommendedProduct[];
    };
  };
}

interface IProductState {
  products: IProduct[];
  cartItems: IProduct[];
  isCartModalOpen: boolean;
  isProductExist: (productID: string, products: IProduct[]) => boolean;
  setProducts: (product: IProduct) => void;
  setIsCartModalOpen: (isOpen: boolean) => void;
  addToCartProduct: (product: IProduct) => void;
  clearCart: () => void;
}

export const useStore = create<IProductState>((set) => ({
  // initial state
  products: [],
  cartItems: [],
  isCartModalOpen: false,
  // methods for manipulating state
  isProductExist: (productID, products: IProduct[]) => {
    if (products.find((product) => product.ref === productID)) {
      return true;
    } else {
      return false;
    }
  },
  setProducts: (products: any) => {
    set(() => ({
      products: products,
    }));
  },
  setIsCartModalOpen: (isOpen: boolean) => {
    set(() => ({
      isCartModalOpen: isOpen,
    }));
  },
  addToCartProduct: (product: IProduct) => {
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
    }));
  },
}));
