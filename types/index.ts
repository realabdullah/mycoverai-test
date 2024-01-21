/* eslint-disable unused-imports/no-unused-vars */

interface ProductCategory {
    id: string;
    name: string;
}

interface ProductProvider {
    id: string;
    company_name: string;
}

interface FullBenefit {
    name: string;
    description: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    meta: {
        mca_price: {
            monthly: string;
            annually: string;
            quarterly: string;
            biannually: string;
        };
    };
    provider: ProductProvider;
    productCategory: ProductCategory;
    active: boolean;
    claimable: boolean;
    renewable: boolean;
    key_benefits: string;
    full_benefits: string | FullBenefit[];
    how_it_works: string;
    how_to_claim: string;
    created_at: string;
    updated_at: string;
}
