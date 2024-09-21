export interface Post {
  id: string;
  post_type_id: string;
  creation_date: string;
  score: string;
  view_count: string | null;
  body: string;
  owner_user_id: string;
  owner_display_name: string | null;
  last_edit_date: string;
  last_activity_date: string;
  title: string | null;
  tags: string | null;
  answer_count: string | null;
}

export interface Question extends Post {
  view_count: string;
  tags: string;
  title: string;
  answer_count: string;
}

export interface Answer extends Post {
  view_count: null;
  tags: null;
  title: null;
  answer_count: null;
}
