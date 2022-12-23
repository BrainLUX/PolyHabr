export namespace Article {

  export class Item {
    id: number = 0;
    title: String = "";
    creator: Creator = new Creator("Student");
    tags: Tag[] = [];
    type: String = "";
    date: String = "";
    body: String = "";
    info: Info = new Info();

    constructor(title: String, tags: Tag[], type: String, date: String, body: String) {
      this.title = title;
      this.tags = tags;
      this.type = type;
      this.date = date;
      this.body = body;
    }

    static createTemporary(): Item {
      return new Item("REST API в микросервисной архитектуре", [
        new Tag("Блог компании Издательский дом «Питер»"),
        new Tag("API"),
        new Tag("Микросервисы"),
        new Tag("Проектирование и рефакторинг"),
      ], "Перевод", "сегодня 12:42", "<a href=\"#\">\n" +
        "      <img src=\"https://habrastorage.org/webt/yd/vg/_l/ydvg_lgfrb1nekjmmza0qmbvmoy.jpeg\"\n" +
        "           alt=\"image\">\n" +
        "    </a>\n" +
        "    <br>\n" +
        "    В этом посте расскажу о том, какой вред может нанести межсервисная коммуникация по HTTP в микросервисной архитектуре\n" +
        "    и предложу альтернативный способ совместного использования данных в распределенной системе.")
    }

    static createFullTemporary(): Item {
      return new Item("REST API в микросервисной архитектуре", [
        new Tag("Блог компании Издательский дом «Питер»"),
        new Tag("API"),
        new Tag("Микросервисы"),
        new Tag("Проектирование и рефакторинг"),
      ], "Перевод", "сегодня 12:42", "<a href=\"#\">\n" +
        "      <img src=\"https://habrastorage.org/webt/yd/vg/_l/ydvg_lgfrb1nekjmmza0qmbvmoy.jpeg\"\n" +
        "           alt=\"image\">\n" +
        "    </a>\n" +
        "    <br>\n" +
        "    В этом посте расскажу о том, какой вред может нанести межсервисная коммуникация по HTTP в микросервисной архитектуре и предложу альтернативный способ совместного использования данных в распределенной системе. <a name=\"habracut\"></a><br>\n" +
        "<br>\n" +
        "Микросервисы, REST, API… даже не уверен, можно ли впихнуть в заголовок поста еще больше модных словечек, но знаю наверняка: все эти словечки вворачиваются для того, чтобы заронить сомнения в душе разработчиков, архитекторов и управляющих директоров. Сомнения таковы: если не «делать» микросервисов, если не предусмотреть API на все случаи жизни, а также не придерживаться REST – то что-то пойдет не так. И вы определенно что-то делаете не так, если не проводите все операции по HTTP. <br>\n" +
        "<br>\n" +
        "Так что, держитесь, сейчас будет бомба: я утверждаю, что <b>микросервисы – это не REST по HTTP.</b><br>\n" +
        "<br>\n" +
        "В этом посте будет проиллюстрировано, какой вред может нанести межсервисная коммуникация по HTTP в микросервисной архитектуре, а также будет предложен альтернативный способ совместного использования данных в распределенной системе.<br>")
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
    name: String = "Student";
    surname: String = "Student";
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

  export class Comment {
    creator: Creator = new Creator("User");
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
