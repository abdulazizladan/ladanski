export class Post {
  "id": number;
  "title": string;
  "date_published": Date;
  "thumbnail": string;
  "paragraphs": Paragraph[]
}

class Paragraph {
  "paragraph": string;
  "image": string | null
}
