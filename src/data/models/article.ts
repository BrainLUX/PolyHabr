export namespace Article {

  export class ItemCreate {
    title: string = ""
    text: string = ""
    previewText: string = ""
    filePdf: string | null = ""
    likes: number = 0
    articleType: string = ""
    listDisciplineName: string = ""
    listTag: string[] = [""]
  }

  export class ItemUpdate {
    title: string = ""
    text: string = ""
    previewText: string = ""
    filePdf: string | null = ""
    likes: number = 0
    typeName: string = ""
  }

  export class Item {
    id: number = 0;
    title: string = "";
    user: User = new User("");
    listTag: string[] = [];
    listDisciplineName: string[] = [];
    typeId: Tag = new Tag("");
    date: string = "";
    previewText: string = "";
    previewImgId: string = "";
    text: string = "";
    fileId: number = 0;
    likes: number = 0;
    viewCount: number = 0;
    isSaveToFavourite: boolean = false;
  }

  export class Tag {
    id: number = 0;
    name: string = "";

    constructor(title: string) {
      this.name = title;
    }
  }

  export class Type {
    name: string = "";

    constructor(title: string) {
      this.name = title;
    }
  }

  export class User {
    id: number = 0;
    name: string = "Student";
    surname: string = "Student";
    login: string = "";
    email: string = "";

    constructor(nickname: string) {
      this.login = nickname;
    }
  }

  export class Comment {
    userId: User = new User("User");
    text: string = "";
    date: string = "";

    constructor(text: string) {
      this.text = text;
    }
  }
}
