export namespace Article {
  export class Item {
    id: number = 0;
    title: String = "";
    creator: Creator = new Creator("Student");
    tags: Tag[] = [];
    type: String = "";
    date: String = "";
    fullBody: String = ""; //temporary
    shortBody: String = "";
    info: Info = new Info();

    constructor(title: String, tags: Tag[], type: String, date: String, shortBody: String) {
      this.title = title;
      this.tags = tags;
      this.type = type;
      this.date = date;
      this.shortBody = shortBody;
    }

    static createTemporary(): Article.Item {
      return new Article.Item("REST API в микросервисной архитектуре", [
        new Tag("Блог компании Издательский дом «Питер»"),
        new Tag("API"),
        new Tag("Микросервисы"),
        new Tag("Проектирование и рефакторинг"),
      ], "Перевод", "сегодня 12:42", "<a href=\"https://habr.com/ru/company/piter/blog/698798/\">\n" +
        "      <img src=\"https://habrastorage.org/webt/yd/vg/_l/ydvg_lgfrb1nekjmmza0qmbvmoy.jpeg\"\n" +
        "           alt=\"image\">\n" +
        "    </a>\n" +
        "    <br>\n" +
        "    В этом посте расскажу о том, какой вред может нанести межсервисная коммуникация по HTTP в микросервисной архитектуре\n" +
        "    и предложу альтернативный способ совместного использования данных в распределенной системе.")
    }
  }

  export class Tag {
    id: number = 0;
    title: String = "";

    constructor(title: String) {
      this.title = title;
    }
  }

  export class Creator {
    nickname: String = "";

    constructor(nickname: String) {
      this.nickname = nickname;
    }
  }

  export class Info {
    rating: Number = 0;
    views: Number = 0;
    favorite: Number = 0;
  }
}
