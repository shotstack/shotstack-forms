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

## How to implement it on your website.

After downloading the released `package` from this repository you’ll be provided with three files.

```
│   Shotstack.js
│   Shotstack.iife.js
│   style.css
```

To use, you can either import the library as an es module or include Shotstack as a global variable.

To use provided styles: include a `<link rel="stylesheet" href="style.css">` tag inside the `head` tag.

### Shotstack references

|        | method         | arguments                                                           | effect                                                                                                                                                                                           |
| ------ | -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|        | constructor    | initialTemplate?: any                                               | Initializes the component with the provided template. If no initial template is found, Shotstack will mount with minimal data instead.                                                           |
| public | renderForm     | container: HTMLElement                                              | Renders and appends the form inside target HTMLElement container                                                                                                                                 |
| public | renderElements | container: HTMLElement, after?: HTMLElement => void;                | Renders and appends an input tag for each merge field in the source template inside the container. If an 'after' HTMLElement is provided, it renders the inputs after that element instead.      |
| public | on             | event: 'change' \| 'submit', callback: (resultTemplate) => void;    | Appends a new event handler for a specific event at the component's lifecycle                                                                                                                    |
| public | on             | event: 'error', callback: (error, previousError) => void;           | Appends a new event handler for the error event at the component's lifecycle                                                                                                                     |
| public | off            | event: 'change' \| 'submit' \| 'error', callbackReference           | Removes the callback handler from the target event handler array                                                                                                                                 |
| public | load           | sourceTemplate: any => void                                         | Sets a new template source for the form and triggers on change events                                                                                                                            |
| public | submit         | none                                                                | Calls all submit event handlers (default is none)                                                                                                                                                |
| public | display        | none                                                                | Changes the display of the current container to show the component                                                                                                                               |
| public | hide           | none                                                                | Changes the display of the current container to hide the component                                                                                                                               |
| public | attach         | newElement: HTMLElement                                             | Changes the current container where the element should be rendered, cleaning the previous container                                                                                              |
| public | remove         | none                                                                | Removes the component from the container where it has been rendered                                                                                                                              |
| public | container      | none => HTMLElement                                                 | Returns the HTML Element where the component is being rendered                                                                                                                                   |
| public | addField       | find: string, replace: string => void                               | Adds a field to the source JSON template with the provided find and replace properties. Triggers change events                                                                                   |
| public | getField       | field: {find?: string, replace?: string} => MergeField \| undefined | Searchs for the first MergeField element with the same find and replace (if provided) properties and returns the reference. If search fails, or no properties are supplied, it returns undefined |
| public | removeField    | field: MergeField => void                                           | Removes provided item reference from the merge array. Triggers change events                                                                                                                     |
| public | merge          | none => JSON                                                        | Returns a merged JSON template to be used on the Shotstack API                                                                                                                                   |
| public | getInputs      | none => HTMLCollection                                              | Returns an HTMLCollection of `<input>` tags which can be used to modify and update the template JSON. On change, they trigger change events                                                      |

### Using Shotstack to generate a Form

- First you have to include the library in your project either as a module or as a global variable.
- Initialize a new instance of the library by calling `const shotstack = new Shotstack(yourSourceTemplate)`. This parameter is optional.
- If a source template was not provided, load a source template by calling `shotstack.load(yourSourceTemplate)`.
- Finally, render the form in a target DOM element by calling `shotstack.renderForm(targetDOMElement)`
- Optionally, you may call the `renderElements` method instead, to generate and render a list of `<input>` for every merge element in the source template.

#### Module example

- Download and paste the package folder inside the root of your project.
- Import Shotstack from `Shotstack.js` in your `index.js`

`index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <-- Add component style-->
    <link rel="stylesheet" href="package/style.css">
    <title>My website</title>
</head>
<body>
    <h1>My app</h1>
    <!-- ---Content of your website--- -->

    <!-- Target container: -->
    <div id="your-container-id">
</body>
<script src="./index.js" type="module"> </script>
</html>
</html>
```

`index.js`

```
import Shotstack from "./package/Shotstack.js"
const template = { merge: [{ find: "foo", replace: "baz" }] }
const container = document.querySelector("#your-container-id")
const shotstack = new Shotstack(template)
shotstack.renderForm(container)
```

#### Global variable example

- Download and paste the package folder inside the root of your project.
- Add a `<script src="/package/Shotstack.iife.js"></script>` tag in your `index.html`

`index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Add component style -->
    <link rel="stylesheet" href="/package/style.css">
    <!-- Add Shotstack as a global variable -->
    <script src="/package/Shotstack.iife.js"></script>
    <title>Document</title>
</head>
<body>
    <h1>My app</h1>
    <!-- ---Content of your website--- -->

    <!-- Target container: -->
    <div id="your-container-id"></div>
    <script>
        const template = { merge: [{ find: "foo", replace: "baz" }] }
        const container = document.querySelector("#your-container-id")
        const shotstack = new Shotstack(template)
        shotstack.renderForm(container)
    </script>
</body>
</html>
```

#### This is how the component will be rendered on your application.

![Merge Fields Component](https://user-images.githubusercontent.com/55909151/197715455-8ef8070c-4cbb-4132-85fb-bbdd656269f8.png)
