import { MathOperations } from "../src/math-operations";

const mathOperations = new MathOperations();
describe("Test Suite for Math Operations", () => {
    it("Sum Operations", () => {
        const result = mathOperations.sum(2,2);
        expect(result).toBeDefined();
        expect(typeof result === "number").toBeTruthy();
    })
})