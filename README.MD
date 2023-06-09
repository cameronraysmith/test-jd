This project was created using [Create JD App](https://github.com/OrJDev/create-jd-app)

## Start Dev Server

```bash
pnpm dev
```

This will start a dev server on port `3000` and will watch for changes.

## Testing Production Build

### Build

```bash
pnpm build
```

### Start

```bash
pnpm start
```

This will start a production server on port `3000`.

### Enviroment Variables

- `ENABLE_VC_BUILD`=1
- `DATABASE_URL`=file:./db.sqlite  
  
[Sponsor Create JD App](https://github.com/sponsors/OrJDev)

## Running tests

See [solid-start/examples/with-vitest](https://github.com/solidjs/solid-start/tree/main/examples/with-vitest).

To run tests once

```bash
pnpm test
```

or, to watch for source changes and rerun

```bash
pnpm test-watch
```

or, to use the ui

```bash
pnpm test-ui
```
