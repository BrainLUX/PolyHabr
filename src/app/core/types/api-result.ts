export class ApiResult<T> {
  contents: T | undefined = undefined;
  totalElements: number = 0;
  totalPages: number = 0;
}
