// tslint:disable: no-unused-expression
import { expect } from "chai";
import tryagain from "../src/index";
describe("Tests", () => {
    it("Should run the function 5 times if the function always throws", async () => {
        try {
            await tryagain(5, () => {
                add(2, 3);
            });
            expect.fail();
        } catch (err) {
            expect(err).to.exist;
        }
    });
});

function add(a: number, b: number): number {
    //   throw new Error("Errored");
    return a + b;
}
