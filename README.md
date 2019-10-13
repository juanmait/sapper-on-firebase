# Svelte/Sapper on firebase functions

This repo showcases the installation of a [Svelte]/[Sapper] app backed by
[firebase] functions. It doesn't use [express] nor [polka] (although it can me
easily added). It only use the auto-generated sapper middleware as the main
firebase function handler.

[svelte]: https://svelte.dev/
[sapper]: https://sapper.svelte.dev/
[firebase]: https://firebase.google.com/
[express]: https://expressjs.com/
[polka]: https://github.com/lukeed/polka

## Get started

- Go to `src/client.js` and add your firebase stuff/config.
- Create your `.firebaserc` by coping the given example:
  `cp .firebaserc.example .firebaserc` and complete with your stuff.
- Create your `firebase.json` file by coping the given example:
  `cp firebase.example.json firebase.json` and complete with your stuff.

## Serve everything locally

```sh
$ npm run build-dev && cd functions && npm run serve
```

The above will run:

- `$ NODE_ENV=development sapper build`: builds a dev version of your
  sapper/svelte app.
- `$ firebase serve`: run your firebase project locally.

## Deploy to firebase

```sh
$ cd functions && npm run deploy
```
