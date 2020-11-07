## LowCard

A card and chat app

## Notes

I spent a lot of time on the Cards page and am really happy with how it came out.

### Fun Challenges

- The character input had some interesting gotchas
  - Delete key behavior
  - Emojis
  - "One character"

### Design

- Chose "Montserrat" font as Proxima Nova is not free
  - https://w3bits.com/proxima-nova-alternative-fonts/

## TODO

### Part 1

- [x] Delete button
- [x] Copy button
- [x] Header links

### Part 2

- [x] Embed logic
  - [?] URL processing
- [x] Attach card UI
- [x] Attachment logic
- [ ] Pro pics?

## Things I Didn't Get To

This is a small list of stuff I thought about but didn't get to

- Better feedback on copy and remove successful
  - Toast notification or something
- Standardized UI components with generic props for reused values
  - `<GenericButton />`, `<GenericLayout />`, `<GenericInput />`

```tsx
<GenericLayout padding={1} borderBottom display="flex">
  {someStuff}
</GenericLayout>
```
