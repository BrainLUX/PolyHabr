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
    userId: User = new User("User");
    text: string = "";
    date: String = "";

    constructor(text: string, date: String) {
      this.text = text;
      this.date = date;
    }
  }
}
