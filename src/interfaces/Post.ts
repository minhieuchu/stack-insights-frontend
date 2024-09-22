export interface Post {
  id: string;
  post_type_id: string;
  creation_date: string;
  score: string;
  body: string;
  owner_user_id: string;
  owner_display_name: string | null;
  last_edit_date: string;
  last_activity_date: string;
}

export interface Question extends Post {
  view_count: string;
  tags: string;
  title: string;
  answer_count: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Answer extends Post {}
