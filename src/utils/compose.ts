export const composeArrayLike = 
    <Args extends Array<any>, Result extends Array<any>>(...fns: ((...args: any[]) => unknown)[]):
    ((...args: Args) => Result) =>
{
    if (!fns.length) {
        return () => [] as any[] as Result
    }

    return (...args: Args): Result => {
        const firstFn = fns[0];
        const firstResult = firstFn(...args);

        return fns.reduce((res, fn, i) => {
            if (i === 0) {
                return res;
            }

            return fn(res)
        }, firstResult) as Result
    }
}