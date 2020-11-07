import { Account, Message } from "../../core/schema";

export const mockAccountFactory: () => Account = () => {
  return {
    uuid: "",
    name: "theo",
    profileImageUrl: "",
  };
};

export const mockMessageFactory: () => Message = () => {
  return {
    uuid: "",
    name: "theo",
    profileImageUrl: "",
    fromAccount: mockAccountFactory(),
    text: "Some text",
    timestamp: new Date(),
  };
};
