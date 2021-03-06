This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start-mock`

This will start the project and a graphql mock server. Subscriptions will not be served, but the project can deliver queries.

The mock server will be run on [http://localhost:4000](http://localhost:4000). Open the link in a browser to interact via GraphiQL.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

In this mode, it is assumed the app has access to a React Relay-compliant API matching the `schema.graphql` specification. Set up your API by assigning the fetch and websocket URLs in the `REACT_APP_RELAY_API_ENDPOINT` and `REACT_APP_RELAY_SUBSCRIPTION_ENDPOINT` variables in your `.env`. Some example values might look like this (using a Hasura Relay API):

```
REACT_APP_RELAY_API_ENDPOINT="http://localhost:8080/v1beta1/relay"
REACT_APP_RELAY_SUBSCRIPTION_ENDPOINT="ws://localhost:8080/v1beta1/relay"
```

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Tests are currently configured to create storybook snapshot tests based on component stories. For more details, check out [storybook snapshot tests](https://storybook.js.org/docs/react/workflows/snapshot-testing)

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run storybook`

This launches the Storybook tool which contains component tests and UI specifications.<br/>
Storybook maintains local snapshot tests as well - see `npm run test`.

There is a CI/CD process to deploy this repository to [Chromatic](https://www.chromatic.com) to track changes to the UI over time. Chromatic also publishes a Storybook instance for each build.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
