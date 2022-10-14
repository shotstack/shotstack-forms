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

This module will always try to find an HTML `element` with id "shotstack-form-field", and will render the form using that `element` as a container.

After downloading the released `package` from this repository you’ll be provided with three files.

```
│   Shotstack.js
│   Shotstack.iife.js
│   style.css
```

To use, you can either import the library as an es module or include Shotstack as a global variable.

To use provided styles: include a `<link rel="stylesheet" href="style.css">` tag inside the `head` tag.

### Shotstack references

|        | method      | arguments                                                           | effect                                                                                                                                                                                                                                                                                                                                           |
| ------ | ----------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|        | constructor | initialTemplate?: any, container?: HTMLElement                      | Mounts the component with the provided template inside the container. If no initial template, Shotstack will mount with minimal data. If no container is found, it will look for an HTML element with an id of "shotstack-form-field". If this also fails, it will not render anything, and the render method will need to be called afterwards. |
| public | render      | target: HTMLElement                                                 | Renders and appends the form inside target DOM element                                                                                                                                                                                                                                                                                           |
| public | on          | event: 'change' \| 'submit', callback: (resultTemplate) => void;    | Appends a new event handler for a specific event at the component's lifecycle                                                                                                                                                                                                                                                                    |
| public | on          | event: 'error', callback: (error, previousError) => void;           | Appends a new event handler for the error event at the component's lifecycle                                                                                                                                                                                                                                                                     |
| public | off         | event: 'change' \| 'submit' \| 'error', callbackReference           | Removes the callback handler from the target event handler array                                                                                                                                                                                                                                                                                 |
| public | load        | input: any => void                                                  | Sets a new template source for the form and triggers on change events                                                                                                                                                                                                                                                                            |
| public | submit      |                                                                     | Calls all submit event handlers (default is none)                                                                                                                                                                                                                                                                                                |
| public | display     | none                                                                | Changes the display of the current container to show the component                                                                                                                                                                                                                                                                               |
| public | hide        | none                                                                | Changes the display of the current container to hide the component                                                                                                                                                                                                                                                                               |
| public | attach      | newElement: HTMLElement                                             | Changes the current container where the element should be rendered, cleaning the previous container                                                                                                                                                                                                                                              |
| public | remove      | none                                                                | Removes the component from the container where it has been rendered                                                                                                                                                                                                                                                                              |
| public | container   | none => HTMLElement                                                 | Returns the HTML Element where the component is being rendered                                                                                                                                                                                                                                                                                   |
| public | addField    | find: string, replace: string => void                               | Adds a field to the source JSON template with the provided find and replace properties. Triggers change events                                                                                                                                                                                                                                   |
| public | getField    | field: {find?: string, replace?: string} => MergeField \| undefined | Searchs for the first MergeField element with the same find and replace (if provided) properties and returns the reference. If search fails, or no properties are supplied, it returns undefined                                                                                                                                                 |
| public | removeField | field: MergeField => void                                           | Removes provided item reference from the merge array. Triggers change events                                                                                                                                                                                                                                                                     |
| public | merge       | none => JSON                                                        | Returns a merged JSON template to be used on the Shotstack API                                                                                                                                                                                                                                                                                   |

### Using Shotstack as a module import

To simply implement this library as a module, on the `index.html` of your project you just have to add a new `element` where the component will be rendered on your site as follows.

- Create a new `<div id="shotstack-form-field"></div>`, this will be where the component will be rendered.
- Add a `script src="./yourDirectory/Shotstack.js" type="module"` at the end of the `body` tag.
- Optionally, you can import the Shotstack module and call the render function providing target element.

#### Example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <-- Add component style-->
    <link rel="stylesheet" href="style.css">
    <title>My website</title>
</head>
<body>
    <h1>My app</h1>
    ---Content of your website---

    <--Add container, this will be the component's location-->
    <div id="shotstack-form-field"></div>

</body>
<--Finally, add the provided script>
<script src="./Shotstack.js" type="module"></script>
</html>
```

### Using Shotstack as a global variable

To implement this library as a global variable, just include the following in the `head` tag of your html `<script src="./your-directory/Shotstack.iife.js"></script>`

- Create a new `<div id="shotstack-form-field"></div>`, this will be where the component will be rendered.
- Optionally, you can call the render function providing target element.

#### Example

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/package/style.css">
    <script src="/package/Shotstack.iife.js"></script>

    <title>Document</title>
</head>

<body>
    <h1>My business</h1>
    <div id="shotstack-form-field"></div>
    <div>
        <script>
            let shotstack = new Shotstack()
        </script>
    </div>
</body>

</html>
```

#### This is how the component will be rendered on your application.

![Merge Fields Component](https://user-images.githubusercontent.com/55909151/195859063-7c87212b-be7b-484e-a835-70fda764bd2c.png)
