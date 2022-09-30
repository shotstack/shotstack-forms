# Shotstack Merge Fields

Shotstack Merge Fields is a simple library that you can embed in any app. It's an application designed to help you easily modify a template for a Shotstack Video and generate a JSON with updated values ready to be consumed by the [Shotstack Video Editing API](https://shotstack.io/product/video-editing-api/).

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

|        | method | arguments           | effect                                                 |
| ------ | ------ | ------------------- | ------------------------------------------------------ |
| public | render | target: HTMLElement | Renders and appends the form inside target DOM element |

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
    <div id="root"></div>
    <div>
        <script>
            let form = Shotstack.render(document.querySelector("#root"))
        </script>
    </div>
</body>

</html>
```

#### This is how the component will be rendered on your application.

![Merge Fields Component](https://i.gyazo.com/ef623968ebe67f20322c43b43d16ba2b.png)
