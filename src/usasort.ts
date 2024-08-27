import { isNil } from "lodash";

type ByCondition<T> = {
  isUSA: (item: T) => boolean;
  sortItem: (a: T, b: T) => number;
};
type byValue<T> = { usaValue: string; getValue: (item: T) => string };

export function usasort<T>(
  data: T[],
  idMethod: {
    byCondition?: ByCondition<T>;
    byValue?: byValue<T>;
  }
) {
  if (!isNil(idMethod.byCondition)) {
    return data.sort((a, b) => {
      if (idMethod.byCondition!.isUSA(a)) {
        return -1;
      } else if (idMethod.byCondition!.isUSA(b)) {
        return 1;
      } else return idMethod.byCondition!.sortItem(a, b);
    });
  } else if (!isNil(idMethod.byValue)) {
    return data.sort((a, b) => {
      if (idMethod.byValue!.getValue(a) === idMethod.byValue!.usaValue) {
        return -1;
      } else if (idMethod.byValue!.getValue(b) === idMethod.byValue!.usaValue) {
        return 1;
      } else
        return idMethod
          .byValue!.getValue(a)
          .localeCompare(idMethod.byValue!.getValue(b));
    });
  } else console.error("USASort wasn't given a way to identify the USA");
}
