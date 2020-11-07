import { Account, Message, YoutubeLinkMetadata } from "../../core/schema";
import { v4 } from "uuid";
import * as txtgen from "txtgen";

export const mockAccountFactory: () => Account = () => {
  return {
    uuid: v4(),
    name: mockNames[Math.floor(Math.random() * mockNames.length)],
    profileImageUrl: "",
  };
};

const mockNames = ["theo", "murphy", "miles"];

export const mockMessageFactory: () => Message = () => {
  return {
    uuid: v4(),
    name: mockNames[Math.floor(Math.random() * mockNames.length)],
    profileImageUrl: "",
    fromAccount: mockAccountFactory(),
    text: txtgen.sentence(),
    timestamp: new Date(),
  };
};

const ytMocks: YoutubeLinkMetadata[] = [
  {
    title:
      "6 Reasons Outer Wilds Is One Of The Best Adventure Games Ever Made | Outer Wilds Review",
    description:
      "Writing an Outer Wilds review isn\u2019t easy. This is a game built on secrets and the thrill of discovery - the very things that make it one of the best adventure games ever made, are the same things that threaten to spoil it. I\u2019ve carefully cut around as much as I can in this Outer Wilds gameplay, so you should be safe to listen to our verdict on a very special game.\n\nFor a written Outer Wilds review check out Rock Paper Shotgun: The Site. This is the RPS video gang's attempt at Outer Wild impressions. Again very tricky to do when you are scared of visual spoilers. This is an Outer Wilds PC review - you'll see Xbox prompts in the footage, Mobius recommend using a controller (it makes it easier to work the jetpack thrusters I think) so who are we to rock the boat. We recorded our Outer Wilds test on a GTX 1070 - it's very stable at 1440p. I think it's one of the best adventure games on PC - it's one of the best open world games PC, too, though it isn't much like any other we've played, what with all the space and that.\n\nThis Outer Wilds gameplay PC takes you through the basics and hopefully captures the spark of what makes it special. It's a handcrafted universe stuck in a time loop, leading to some incredibly smart puzzles that play out on an epic scale. Through in great gadgets, gorgeous planets, a warm and affectionate tone and this is really special. Honestly, if you like grand adventures in the vein of Zelda you should skip The Outer Wilds review and get straight to the good stuff. The Outer Wilds release date is 30 May - not long to wait.\n\nOf course, you can also get Outer Wilds Xbox - even better, it's part of the Xbox Game Pass. You'd be mad to miss a game this good as part of your subscription, so get right on it. We don't know how well Outer Wilds Xbox One runs, so do let us know in the comments if people should watch out for it. Of course, the disappointing thing is that Outer Wilds Steam is not a thing for the time being - it's another damned Epic Game Store exclusive. Yes, the game will be just as good when it arrives on Steam, but it's a shame to limit it to Epic right now. Personally I'd want to get on it before anyone spoils it, but your mileage may vary.\n\nIf you have any questions about Outer Wilds pop them in the comments and I'll do my best to answer them. And if you enjoy this review, why not subscribe to Rock Paper Shotgun for other similar videos throughout the week. Thanks for watching and have fun in space.\n\n#OuterWilds #OuterWildsReview #Marshmallows",
    thumbnail:
      "https://i.ytimg.com/vi/4kYtnjmpPg4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDy_hOon4G_TlTY1uuerjm4q8TWfA",
  },
];

export const mockYoutubeMetaFactory: () => YoutubeLinkMetadata = () => {
  return ytMocks[Math.floor(Math.random() * ytMocks.length)];
};
