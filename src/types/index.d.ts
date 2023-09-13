export interface UserPB {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}

export interface ChatPB {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  id_user_receive: string;
  id_user_send: string;
  text_chat: string;
}

export interface PocketBaseResponse<T> {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: T[];
}
