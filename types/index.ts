/* eslint-disable unused-imports/no-unused-vars */

interface ProductCategory {
    id: string;
    name: string;
}

interface ProductProvider {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    company_name: string;
    business_email: string;
    support_email: string;
    active: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    route_name: string;
    price: string;
    provider: ProductProvider;
    productCategory: ProductCategory;
    active: boolean;
    is_live: boolean;
    key_benefits: string;
    full_benefits: string;
    how_it_works: string;
    how_to_claim: string;
    created_at: string;
}
