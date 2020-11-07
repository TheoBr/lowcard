// The contents of this file would ideally be generated with a gql codegen
export interface CardProperties {
  backgroundColor: string;
  textColor: string;
  char: string;
}

export interface Account {
  uuid: string;
  name: string;
  profileImageUrl: string;
}

export interface Attachments {
  uuid: string;
  entityType: "CARD" | "URL";
  card?: CardProperties;
  metadata?: YoutubeLinkMetadata | TwitterLinkMetadata;
}

export interface Message {
  uuid: string;
  text: string;
  fromAccount: Account;
  attachments?: Attachments[];
  timestamp: Date;
}

export interface YoutubeLinkMetadata {
  title: string;
  description: string;
  thumbnail: string;
}

export interface TwitterLinkMetadata {
  fromAccount: {
    name: string;
    profileImage: string;
  };
  content: string;
}

// Universal storage keys (in lieu of backend)
export const CARDS_STORAGE_KEY = "cards-storage-key";
