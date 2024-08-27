"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usasort = usasort;
const lodash_1 = require("lodash");
function usasort(data, idMethod) {
    if (!(0, lodash_1.isNil)(idMethod.byCondition)) {
        return data.sort((a, b) => {
            if (idMethod.byCondition.isUSA(a)) {
                return -1;
            }
            else if (idMethod.byCondition.isUSA(b)) {
                return 1;
            }
            else
                return idMethod.byCondition.sortItem(a, b);
        });
    }
    else if (!(0, lodash_1.isNil)(idMethod.byValue)) {
        return data.sort((a, b) => {
            if (idMethod.byValue.getValue(a) === idMethod.byValue.usaValue) {
                return -1;
            }
            else if (idMethod.byValue.getValue(b) === idMethod.byValue.usaValue) {
                return 1;
            }
            else
                return idMethod
                    .byValue.getValue(a)
                    .localeCompare(idMethod.byValue.getValue(b));
        });
    }
    else
        console.error("USASort wasn't given a way to identify the USA");
}
//# sourceMappingURL=usasort.js.map