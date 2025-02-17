export interface ILabel {
    label_ID: string;
    name: string;
    description: string;
    image: string;
    slider_links?: string[];
    type?: string;
    created_date: Date;
}
