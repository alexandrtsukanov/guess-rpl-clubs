export const composeArrayLike = 
    <Args extends Array<any>, Result extends Array<any>>(...fns: ((...args: any[]) => unknown)[]):
    ((...args: Args) => Result) =>
{
    if (!fns.length) {
        // @ts-ignore
        return () => []
    }

    return (...args: Args): Result => {
        const lastFn = fns[fns.length - 1];
        const firstResult = lastFn(...args);

        return fns.reduceRight((res, fn, i, arr) => {
            if (i === arr.length - 1) {
                return res;
            }

            return fn(res)
        }, firstResult) as Result
    }
}