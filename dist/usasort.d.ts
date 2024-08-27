type ByCondition<T> = {
    isUSA: (item: T) => boolean;
    sortItem: (a: T, b: T) => number;
};
type byValue<T> = {
    usaValue: string;
    getValue: (item: T) => string;
};
export declare function usasort<T>(data: T[], idMethod: {
    byCondition?: ByCondition<T>;
    byValue?: byValue<T>;
}): T[];
export {};
