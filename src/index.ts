export default async function <T>(times: number,
                                  body: () => Promise<T> | T,
                                  errorHandler?: (error: any, count: number) => any): Promise<T> {
  let count = 1;
  while (count < times) {
    try {
      return await body();
    } catch (error) {
      if (errorHandler) {
        errorHandler(error, count);
      }
    }
    count++;
  }
  return await body();
}
