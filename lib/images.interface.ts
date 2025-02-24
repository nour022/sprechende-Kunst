export interface IImages {
  img_ID?: string;
  name: string;
  description: string;
  links?: string[];
  audio_link?: string;
  status?: string[];
  created_date?: string;
  label_ID: string; // ILabel -> label_ID
  editedBy?: string[]; // IUsers -> user_ID
  author_person_ID: string; // IKunstschaffende -> person_ID
  views_num?: number;
  shares_num?: number;
  img: string;
}
