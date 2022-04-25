# [Reminders](https://fullchee-reminders.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/491f41eb-4181-4989-a6ed-71582e307840/deploy-status)](https://app.netlify.com/sites/fullchee-reminders/deploys)

Shows a random piece of media that reminded me of who I want to be.

In the day-to-day grind, it's easy to forget what's important.

I've also started using this as a spaced repetition tool (like Anki) for YouTube and podcasts.

I visit this site often to remind myself of what kind of person I want to be from moma's womb to tomb.

I also use this as an alternative to getting sucked into YouTube or another social media site or the news.

## Links

- Frontend React App
  - [Website](https://fullchee-reminders.netlify.app/)
  - [GitHub](https://github.com/Fullchee/values-client)
- Backend
  - [GitHub](https://github.com/Fullchee/reminders-backend)
  - Postgres, Node, Express

---

## Install

1. Install node version 14+
2. Install `yarn v1`
3. Install npm dependencies
   1. `yarn`
4. Setup local env variables
   1. `cp sample.env .env`
   2. Update the env var

```bash
yarn
yarn start
```

## Deploy

- Netlify is linked with the GitHub repo

## Building the Android APK

1. Ensure that Android Studio is installed
   1. `brew install --cask android-studio`
2. Ensure that ionic is installed
   1. `npm i -g @ionic/cli`
3. `yarn android`
4. In the menu bar, click `Build > Build Bundle(s) / APK
5. ![3fa4503f917425bbee7c01d5ff2aa45a.png](3fa4503f917425bbee7c01d5ff2aa45a.png)
6. Save the `app-debug.apk`

## TODOs (Kanban Board)

- on Todoist
