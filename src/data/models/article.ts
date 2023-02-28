export namespace Article {

  export class Item {
    id: number = 0;
    title: string = "";
    user: User = new User("");
    listTag: string[] = [];
    listDisciplineName: string[] = [];
    typeId: Tag = new Tag("");
    date: string = "";
    previewText: string = "";
    text: string = "";
    fileId: number = 0;
    likes: number = 0;
  }

  export class Tag {
    id: number = 0;
    name: string = "";

    constructor(title: string) {
      this.name = title;
    }
  }

  export class User {
    id: number = 0;
    name: String = "Student";
    surname: String = "Student";
    login: String = "";

    constructor(nickname: String) {
      this.login = nickname;
    }
  }

  export class Comment {
    creator: User = new User("User");
    text: string = "";
    date: String = "";


    constructor(text: string, date: String) {
      this.text = text;
      this.date = date;
    }

    static createTemporary(): Comment {
      return new Comment("Отлично. Теперь вместо жесткой гарантии получения данных мы получили слабое связывание и отстутствие\n" +
        "    гарантий вообще. Для страничек в интернете - прекрасно. Для финансовой системы немедленная смерть. (Да есть паттерны\n" +
        "    типа event sourcing, но они настолько сложны в разработке... и избыточны в большенстве случаев)\n" +
        "    <br/><br/>\n" +
        "    Вот пример - синий сервис требует данные фиолетового и они на pub/sub. От фиолетового ничего не пришло. Это он\n" +
        "    лежит? Это ничего не случислось? Или еще: все то-же самое, но от фиолетового пришло. Ура? А это точно последние\n" +
        "    данные? Ах там таймстамп-же есть? Ну и что - обновиться через милисекунду оно все равно могло.\n" +
        "    <br/><br/>\n" +
        "    Вот и получаются гибридные pub/sub и request/response. А там не только все плюсы, но и все минусы обоих.\n" +
        "    <br/><br/>\n" +
        "    Нет счастья. Надо думать над каждой связью.", "11.11.2022 в 15:22");
    }
  }
}
