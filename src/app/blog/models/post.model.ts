export interface Post {
    id: string;
    title: string;
    link: string;
    author: string;
    datePublished: Date;
    paragraphs: {
        type: string;
        content: string;
    }[];
    summary: string;
    image: string;
    body: string[];
}