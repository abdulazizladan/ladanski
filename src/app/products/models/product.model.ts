export class Product{
    "id": string;
    "name": string;
    "description": string;
    "preview": string;
    "summary": string;
    "link": string;
    "demo_link": string;
    "sections": [
        {
            "type": string;
            "content": string | string[] | {subheading: string, content: string};
        }
    ]
}