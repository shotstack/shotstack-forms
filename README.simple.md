# Shotstack Forms

Source code for the Shotstack forms browser based forms script.

### Prerequisites

Node 16+

Use `nvm use` if nvm is installed to automatically select version 16.

### Installation

```
npm install
```

### Build the script

Generate the widget JavaScript:

```
npm run package
```

This will create a `forms.min.css` and `forms.min.js` file in the **package** folder.

### Deployment

To deploy to the Shotstack js.shotstack.io domain run:

```
npm run deploy
```

This requires the AWS CLI to be installed plus access keys configured. If you package and deploy your own scripts you
will need to copy the files yourself or create your own deployment process.
