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

### Extending your form with renderElements.

Assuming you have a template with uncontrolled values and your own form with user controlled values, you probably don't need to render the full Shotstack Form, and you can render the input elements instead.

#### With template only

- Consider the following example:
  `template`

```
    {
            "timeline": {
                "tracks": [{
                    "clips": [
                        {
                            "asset": {
                                "type": "title",
                                "text": "Hello {{ NAME }}",
                                "style": "future"
                            },
                            "start": 0,
                            "length": 5
                        }
                    ]
                }
                ]
            },
            "output": {
                "format": "mp4",
                "resolution": "hd"
            },
            "merge": [{
                "find": "NAME",
                "replace": "world"
            }]
        }
```

`form`

```
<form name="your-custom-form">
    <h3>My form</h3>
    <p>Merge fields:</p>
    <div id="your-merge-fields-container"></div>
    <p>Press to submit the form</p>
    <input name="submit" type="button" value="Submit" />
</form>
```

- Initialize the component with the template and call `shotstack.renderElements` on your container.

```
        const form = document.querySelector('form')
        const shotstack = new Shotstack(template)
        const container = document.querySelector("#your-merge-fields-container")
        shotstack.renderElements(container)
```

- Add a submit event to Shotstack (in this case, we are just logging the resulting template to the console), and bind `shotstack.submit` to your submit button

```
        shotstack.on('submit', resultingTemplate => console.log(resultingTemplate))
        function submit(e) {
            e.preventDefault()
            shotstack.submit()
        }
        const submitInput = form.elements.namedItem('submit')
        submitInput.addEventListener('click', submit)
```

Note: calling `shotstack.load` after rendering the input elements will make the inputs lose their reference to the template service and you will need to generate new ones.

#### With template and other user controlled inputs

- Considering the same template as before, but with a form that modifies other sections of the template via user controlled inputs.

`form`

```
<form name="your-custom-form">
    <h3>My form</h3>
    <input name="name" type="text">
    <p>Merge fields:</p>
    <div id="your-merge-fields-container"></div>
    <p>Press to submit the form</p>
    <input name="submit" type="button" value="Submit" />
</form>
```

- In order to update values of the template apart from the merge field, we have to set a new source template by using shotstack.load(updatedTemplate). However, as previously stated, updating the source template makes the inputs lose their reference to the Shotstack service, so we have to generate new input tags every time we call shotstack.load:

```
        function updateContainer() {
            // We select the container
            const container = document.querySelector("#your-merge-fields-container")
            // Erase its contents
            container.innerHTML = ""
            // And attach the new inputs
            shotstack.renderElements(container)
        }
```

- Finally, select the user controlled input and bind an onChange function that calls updateContainer in it:

```
        function handleNameChange(e) {
            //We get the current form data from the service
            const currentTemplate = shotstack.merge()
            //We load the template with the property and updated value
            shotstack.load({ ...currentTemplate, name: e.target.value })
            //We re-generate the inputs
            updateContainer()
        }
        const nameInput = form.elements.namedItem('name')
        nameInput.addEventListener('change', handleNameChange)
```
