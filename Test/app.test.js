import { describe, it, expect } from "vitest";
import { countSheeps } from "../app.js";

describe('countSheeps', () => {
    it('Debe contar correctamente las ovejas en una lista no vacía', () => {
        const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
        const result1 = countSheeps(list1);
        expect(result1).toEqual('There are 17 sheep in total');
    });

    it('Debe manejar correctamente una lista vacía', () => {
        const list2 = [false, false, false];
        const result2 = countSheeps(list2);
        expect(result2).toEqual('UPS!!! Wolfs eaten Sheeps');
    });


});
