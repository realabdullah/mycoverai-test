/* eslint-disable node/prefer-global/process */

export default defineEventHandler(async () => {
    const url = process.env.API_URL!;
    const token = process.env.TOKEN;

    const response = await fetch(`${url}/products/get-product-categories`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();

    if (data.responseCode === 0 || !data.data)
        throw new Error("Error getting categories");

    return data.data.product_category as ProductCategory[];
});
