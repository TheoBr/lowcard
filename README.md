# LowCard

A card and chat demo app written with Typescript, React, and `styled-components`

[Live Demo](https://lowcard.netlify.app/)

## Notes

- Majority of time spent on cards page
  - Was a really fun new challenge
  - Emojis work! (both typed and copy-pasted)
  - "copy" button gives a shareable URL
- Chat page is mostly mocked
  - Sharing URLs is an abstracted process with a good place to query for metadata
  - Only "embeds" are for sharable card links and youtube
  - Youtube data is mocked, could be fetched from a backend with a generic metadata management service
- Design largely ripped from current Lowkey site
  - With a few DOM cleanup changes i.e. stacked `background` properties
- Attachment menu uses Popper.js
  - I'm very fond of this library, I pushed to make it power menus across Twitch
- Everything should work in Chrome, Firefox, and Safari

### Fun Challenges

- The character input had some interesting gotchas
  - Delete key behavior (chose to suppress it)
  - Emojis
  - "One character"
- URL metadata is hard to get on client side due to CORS, mocked for now
- Overlaying the blob svg to perfectly match the background was fun
  - Chose to negative margin it, looks fine :)
- Tried making a condensed string representation of `CardProperties` for url params, but dropping it directly was most consistent

### Design

- Chose "Montserrat" font as Proxima Nova is not free
  - https://w3bits.com/proxima-nova-alternative-fonts/
- Emojis and "+"'s used as placeholders for a core icon lib
- Didn't have a chance to make a well styled button for icons in cards and card creation UI

## Technical decisions

- Create React App used for ease of setup
- StyledComponents was used over Tailwind
  - I'm more familiar with StyledComponents
  - Wanted to start a new SC project from scratch using some new patterns, v happy with it
- Custom `useLocalStorage` hook to act as pseudo-backend

## Known issues

- local storage doesn't push updates
  - Bad if >1 window open and changes are made to saved cards
  - i.e. add 3 cards in chat with card creator window open, delete one card in creator window, 3 new cards vanish

## Things I Didn't Get To

This is a small list of stuff I thought about but didn't get to

- https://github.com/tleunen/babel-plugin-module-resolver/
  - Seriously wish I got to this, some of these import paths are a mess
  - Doesn't play nice with CRA though :( +10 points to Snowpack
- Animations
  - I usually animate element creation/removal but wanted to focus on maximizing functionality
- Better feedback on copy and remove successful
  - Toast notification or something
- Mocked 'login'/account creation
- Profile pictures in chat
- Dive deeper into `styled-components` by making standardized UI components with generic props for reused values
  - `<GenericButton />`, `<GenericLayout />`, `<GenericInput />`

```tsx
<GenericLayout padding={1} borderBottom display="flex">
  {someStuff}
</GenericLayout>
```
