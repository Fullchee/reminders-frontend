# [Values](https://fullchee-values.netlify.com/)

Random reminder of one of your values.

In the day-to-day grind, it's easy to forget what's important.

I visit this site weekly to remind myself of what kind of person I want to be from womb to tomb.

## Links

- Backend GraphQL Server
  - [Website](https://fullchee-values-backend.herokuapp.com/)
  - [GitHub](https://github.com/Fullchee/values-backend)
- Frontend React App
  - [Website](https://fullchee-values.netlify.com/)
  - [GitHub](https://github.com/Fullchee/values-client)

---

## Install

```bash
yarn install
yarn start
```

## TODOs:

- add a new keyword from website
- show skeleton during the first load (if it's longer than ~2 seconds), it's waiting for heroku to spin up
- add an option to hide the new entry?
- get the title from YouTube
- nav bar for the buttons?
- Hide the contents?
- Form: tidy it up
- React testing library tests
  - Apollo GraphQL tests
- Cypress.io tests
- a11y

## Lessons log

- Making GraphQL requests
  - initially vanilla JS
  - difficult debugging (just a string)
  - eventually switched to Apollo
  - has other really nice features like: caching

### Tech

- React
- Apollo GraphQL
  - making requests to the GraphQL server
- bcrypt
  - reset password
