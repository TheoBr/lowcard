import { Account, Message } from "../../core/schema";
import { v4 } from "uuid";
import * as txtgen from "txtgen";

export const mockAccountFactory: () => Account = () => {
  return {
    uuid: v4(),
    name: "theo",
    profileImageUrl: "",
  };
};

export const mockMessageFactory: () => Message = () => {
  return {
    uuid: v4(),
    name: "theo",
    profileImageUrl: "",
    fromAccount: mockAccountFactory(),
    text: txtgen.sentence(),
    timestamp: new Date(),
  };
};
