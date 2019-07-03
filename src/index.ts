export default async function <T>(times: number,
                                  body: (attempt?: number) => Promise<T> | T,
                                  errorHandler?: (error: any, attempt?: number) => any): Promise<T> {
  let count = 1;
  while (count < times) {
    try {
      return await body(count);
    } catch (error) {
      if (errorHandler) {
        errorHandler(error, count);
      }
    }
    count++;
  }
  return await body(count);
}
