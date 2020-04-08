# Simple text editor
This is a repo for test task which is a simple text editor with ability to format text. It supports bold, italic, underline styles. User can replace any word with synonym using Datamuse API.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Initial setup
Run `npm install` in order to setup application

## Run app
```
git clone https://github.com/mmalikov/ae-texteditor-reactjs.git
cd ae-texteditor-reactjs
npm i
npm start
```

## How it works
Once page will have loaded user can see simple text editor. Text editor contains formatting options toolbar and simple input field with predifined text. User can change text.

DESIGN SOLUTION EXPLANATION
For formatting text we use document.execCommand() browser api. User can format selected text.

Formatting is available in the toolbar at the top of the screen. Once a format is applied - the component indicates formatting options are applied by changing color of applied format button. Applied styles are persisted into an in-memory model (Map<[key: Node, value: [number, Set<string>]]>)

For replacing we use Datamuse API. Once user click on "Find synonyms" button, app will load synonyms for selected text. List with options would be opened after data was loaded.

The app uses MutationObserver for tracking and updating applied styles to avoid memory leaks if user removes styled text.

## Development server
Run `npm start` for a dev server.

## Notes
+ Text sample is given in `text.service.js`
+ Given files structure is not obligatory and could be changed
