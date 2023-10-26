import { expect, it } from "vitest";
import { add } from "./math";

it("Should summarize all number values in an array", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const rest = add(numbers);
    const expectRes = numbers.reduce(
        (prevValue, value) => prevValue + value,
        0
    );
    expect(rest).toBe(expectRes);
});

it("should return NaN is a lest one invalid number is provided", () => {
    const numbers = [1, "invalid"];
    const rest = add(numbers);
    expect(rest).toBeNaN();
});

it("Should yield a correct sum if an array of numeric strings valies is provided", () => {
    const numbers = ["1", "2", "3", "4", "5", "6"];

    const rest = add(numbers);

    const expectRes = numbers.reduce(
        (prevValue, value) => Number(prevValue) + Number(value),
        0
    );

    expect(rest).toBe(expectRes);
});
