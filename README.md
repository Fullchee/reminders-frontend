# [Reminders](https://fullchee-reminders.netlify.app/)

Shows a random piece of media that reminded me of who I want to be.

In the day-to-day grind, it's easy to forget what's important.

I visit this site weekly to remind myself of what kind of person I want to be from moma's womb to tomb.

## Links

- Frontend React App
  - [Website](https://fullchee-reminders.netlify.app/)
  - [GitHub](https://github.com/Fullchee/values-client)
- Backend
  - [GitHub](https://github.com/Fullchee/reminders-backend)
  - Postgres, Node, Express

---

## Install

```bash
yarn
yarn start
```

## TODOs
- Reminders: Updating link makes the url undefined
- Reminders: check for duplicate urls (remove the extra url stuff)
   - `http://www.youtube.com/watch?v=` -> `http://youtu.be/`
- auto save after a minute
- get the speed controller to look good on mobile (move it down)
  - add it to video
  - https://stackoverflow.com/questions/41563995/how-to-change-speed-on-embedded-youtube-video
- Get search working
- React Native app
- delete the object object tag
- Items to add
  - https://jamesclear.com/mental-models
  - https://jamesclear.com/great-speeches
  - Values: https://docs.google.com/document/d/15BHO6_SL3XLTCFoHmqdrPqYQrteH52xy01Oz7aav0Kw/edit#heading=h.htzzy4th400h
  - Meditation notes: https://docs.google.com/document/d/1JyzYaNQThdyTiNkZ1q-0GLyCUDpXeDJcUeIz6ibk-zI/edit#bookmark=id.7rm4zyg5ppng

### Nice to have
- Move to this time in the video/podcast
  - skip forward or backwards
  - Given a URL query param, list the time to skip (so min 50 becomes ?min=50)

