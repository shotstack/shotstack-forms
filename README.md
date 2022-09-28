# Shotstack Merge Fields

Shotstack Merge Fields is a simple library that you can embed in any app. It's an application designed to help you easily modify a template for a Shotstack Video and generate a JSON with updated values ready to be consumed by the [Shotstack Video Editing API](https://shotstack.io/product/video-editing-api/).

## Getting started with this repository.

After downloading this repository, it is necessary to install the required dependencies running by `npm install`.

### Production Build

This project is made on base of Svelte-kit and uses Vite to create a production build. To initialize a production server you may execute `npm run dev` and Vite will build a development build of the content of `src/lib`, available by default on `http://localhost:5173/`.

### Package Distribution

To create a new `package` of this app and leave it ready to implement in any part of a website you must first run `npm run package:win` if you’re currenly on a Windows OS to properly set the build environment and create a `package` at the same time, otherwise just execute `npm run package` to create a `package`.Vite will take the contents of the `src/lib` directory and will output them to a new `package` directory in the root folder, ready for distribution.

## Tech Stack

This project is built with [SvelteKit](https://kit.svelte.dev/) and TypeScript. It also uses Jest for Unit Tests and Cypress for the E2E/integration tests.

As to ensure the quality of the code we use ESLint as a Linter and Prettier as a Code Formatter. To keep stability and stay sure of the changes made we use [Husky](https://typicode.github.io/husky/#/) to automatically run various scripts before a commit, being these both the Linter and the Code Formatter, and both test environments, Jest and Cypress, if any of the stages witnesses a lint or code style error, as well as any of the tests fail, no commit or change can be submitted and therefore aborted.
