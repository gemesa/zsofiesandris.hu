## Our wedding page

https://zsofiesandris.hu

## Quickstart

```
$ cp .env.example .env
```

Then fill your actual values (e.g. API keys) in `.env`.

```
$ npm install
$ npm run build
$ npm run start-prod
```

Finally, open `http://localhost:3000`.

## Command cheatsheet

### Install packages

```
$ npm install
```

### Update packages

```
$ npx npm-check-updates -u
$ npm install
```

### Environment setup

```
$ cp .env.example .env
```

Then fill your actual values (e.g. API keys) in `.env`.

### Build

```
$ npm run build
```

### Run (dev)

```
$ npm run start-dev
```

### Run (prod)

```
$ npm run start-prod
```

### Lint

```
$ npm run lint
```

### Report vulnerabilities

```
$ npm audit
```

### Create the table on the remote server

```
$ npx drizzle-kit push
```

### Inspect/edit the database

```
$ npx drizzle-kit studio
```

## Dependencies

- [PostHog](https://posthog.com/)
- [Sentry](https://sentry.io/)
- [Neon DB](https://neon.com/)
- [Domain](https://portal.rackforest.com/)
- [Resend](https://resend.com/)

## Deploy

TODO
