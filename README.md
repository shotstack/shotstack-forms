# Shotstack Merge Fields

Shotstack Merge Fields is a simple library that you can embed in any part of your website. It consists of a component built on Svelte that renders a form where you can introduce a JSON template for a Shotstack Video, easily modify its merge fields and output a new generated JSON with those merged values ready to be used by the [Shotstack Video Editing API](https://shotstack.io/product/video-editing-api/).

## Example of a template including merge values.

```
{
    "merge": [
        {
            "find": "NAME",
            "replace": "world"
        }
    ],
    "timeline": {
        "tracks": [
            {
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
    }
}
```

For more information about its usage refer to the [Shotstack Guides](https://shotstack.io/docs/guide/).

# How to implement it on your website.

After downloading the released `package` from this repository you’ll be provided with three files.

```
│   Shotstack.js
│   Shotstack.umd.cjs
│   style.css

```

To simply implement this component, on the `index.html` of your project you just have to add a new `element` where the component will be rendered on your site as follows.

- Create a new `<div id="shotstack-form-field"></div>`, this will be where the component will be rendered.
- Add a `script src=".yourDirectory/Shotstack.js" type="module"` at the end of the `body tag`.
- On the `head` include a `<link rel="stylesheet" href="style.css">` to properly show the component styles.

## Example

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

## This is how the component should be rendered.

![Merge Fields Component](https://i.gyazo.com/ef623968ebe67f20322c43b43d16ba2b.png)

# Tech Stack

This project is built with [Svelte](https://svelte.dev/) and TypeScript. It also uses Jest for Unit Tests and Cypress for the E2E/integration tests.

As to ensure the quality of the code we use ESLint as a Linter and Prettier as a Code Formatter. To keep stability and stay sure of the changes made we use [Husky](https://typicode.github.io/husky/#/) to automatically run various scripts before a commit, being these both the Linter and the Code Formatter, and both test environments, Jest and Cypress, if any of the stages witnesses a lint or code style error, as well as any of the tests fail, no commit or change can be submitted and therefere aborted.

# Getting started with this repository.

After downloading this repository, it is necessary to install the required dependencies running by `npm install`.
After this, you can run `npm run dev` to create a production server available by default on ` http://localhost:5173/`.

To create a new `Merge Fields package` ready to implement in any part of a website you must first run `npm run package:win` if you’re currenly on a Windows OS to properly set the build environment, then run `npm run package` to create a `package` of the contents of the `src/lib` directory that will output to a new `package` directory, ready to be added on any website.
