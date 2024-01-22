export function formatDate(value: string) {
    try {
        const date = new Date(value);

        const formattedDate = new Intl.DateTimeFormat("default", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
        }).format(date);

        return formattedDate;
    }
    catch (error) {
        return "Not available.";
    }
}

export function formatAmount(value: string | number) {
    if (!["string", "number"].includes(typeof value))
        return "₦0";

    let amount = value.toString();
    if (amount.includes(","))
        amount = amount.replace(/,/g, "");

    const formattedAmount = `₦${Number(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    return formattedAmount === "₦NaN" ? "₦0" : formattedAmount;
}
