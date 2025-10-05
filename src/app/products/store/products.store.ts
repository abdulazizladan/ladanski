import { Product } from "../models/product.model";
import { Injectable, signal } from "@angular/core";
import { ProductsService } from "../services/products";

export interface ProductsState {
    products: Product[];
    selectedProduct: Product | null;
    loading: boolean;
    error: string | null;
}

@Injectable({ providedIn: 'root'})
export class ProductsStore {
    private readonly productsService = new ProductsService();

    state = signal<ProductsState>({
        products: [],
        selectedProduct: null,
        loading: false,
        error: null
    });

    async loadAll() {
        this.state.update(s => ({ ...s, loading: true, error: null}))
        try {
            const products = await this.productsService.getAll();
            this.state.update(s => ({ ...s, products, loading: false}))
        } catch (error: any) {
            this.state.update(s => ({...s, error: error.message || 'Failed to load products', loading: false}))
        }
    }

    async loadById(id: string) {
        this.state.update(s => ({ ...s, loading: true, error: null}));
        try {
            const product = await this.productsService.getByID(id);
            this.state.update(s => ({...s, selectedProduct: product || null, loading: false}))
        } catch (error: any) {
            this.state.update(s => ({ ...s, error: error.message || 'Faied to load product', loading: false}))
        }
    }
}