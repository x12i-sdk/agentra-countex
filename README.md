# @x12i/agentra-countex usage example

Agentra adapter layer over @x12i/countex.

This consuming application demonstrates **count a user activity fixture with the bundled counter map** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Connect Agentra analytics to the Countex implementation.
- Reuse the adapter boundary when composing an analytics host.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/agentra-countex)
- [Implementation monorepo](https://github.com/x12i/agentra)
- [Reviewed package source](https://github.com/x12i/agentra/tree/772e50e64925e6359e42172d4dcf11d4aa795763/packages/countex)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Local example data

Events and identities are synthetic. Storage and counters live only in this process. The server example binds an ephemeral loopback port and closes it after the check. Alert actions are empty. No notifications, scheduled jobs, MongoDB writes, or external service calls are performed. Dashboard rendering here produces a data model rather than a browser screen.
