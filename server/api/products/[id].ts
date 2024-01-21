/* eslint-disable node/prefer-global/process */

export default defineEventHandler(async (event) => {
    const { id } = event.context.params as { id: string };

    try {
        const url = process.env.API_URL!;
        const token = process.env.TOKEN;

        const response = await fetch(`${url}/products/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();

        if (data.responseCode === 0 || !data.data)
            throw new Error("Error getting the product");

        return data.data.product as Product;
    }
    catch (error) {
        throw createError({
            statusCode: 404,
            message: "Error getting the product",
        });
    }
});
