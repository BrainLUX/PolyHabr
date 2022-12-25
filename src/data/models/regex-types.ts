export enum RegexType {
  LOGIN = "^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$",
  SURNAME = "^[А-ЯЁ][а-яё]*$",
  EMAIL = `^([a-zA-Z0-9\\_\\.\\-]+)@([a-zA-Z0-9\\_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$`
}
