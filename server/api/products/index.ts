/* eslint-disable node/prefer-global/process */

export default defineEventHandler(async () => {
    try {
        const url = process.env.API_URL!;
        const token = process.env.TOKEN;

        const response = await fetch(`${url}/products/get-all-products`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();

        if (data.responseCode === 0 || !data.data)
            throw new Error("Error getting the products");

        return data.data.products as Product[];
    }
    catch (error) {
        throw createError({
            statusCode: 404,
            message: "Error getting products",
        });
    }
});
