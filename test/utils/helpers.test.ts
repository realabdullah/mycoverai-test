import { formatAmount, formatDate } from "../../utils/index";

describe("helper functions should work accordingly", () => {
    it("100.00 to be formatted to ₦100.00", () => {
        expect(formatAmount("100.00")).to.equal("₦100.00");
    });

    it("₦0 should be returned if a text is passed as argument", () => {
        expect(formatAmount("hundred")).to.equal("₦0");
    });

    it("date should be properly formatted", () => {
        expect(formatDate("2022-09-09T21:38:42.268Z")).to.equal("Friday, Sep 9, 2022");
    });

    it("'Not available' should be returned if a malformed argument is passed", () => {
        expect(formatDate("2022-29-09T21:38:42.268Z")).to.equal("Not available.");
    });
});
