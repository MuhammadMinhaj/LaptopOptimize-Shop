## Laptop Optimize

Demo - [Laptop Optimize Website](https://minhaj-laptopoptimize.web.app)

**Technology used in front-end development**

- React
- Material UI
- Material-Icon
- React-Router-DOM
- React-Swipeable-Views

**Technology used in Back-end Development**

- NodeJs
- ExpressJs
- Cors
- Dotenv
- Mongoose
- Jsonwebtoken
- Shortid
- Nodemon

**Note:** I have followed the MVC(Model-View-Controller) pattern to build this API.

## APIs end-points

#### Products Management

**Get :** /api/products/single/:id

**Get :** /api/products/all

**Post :** /api/products/add

**Put :** /api/update/:id

**Delete :** /api/delete/:id

#### Orders Management

**Get :** /api/order/all

**Get :** /api/order/user/all

**Post :** /api/order/confirm

**Delete :** /api/order/delete/:id

**Put :** /api/order/status/:id

#### Admin Login and Verify

**Post :** /api/admin/login

**Get :** /api/admin/login/verify

## Project Inauguration Procedure

Installing the dependencies that are related to the project using yarn or npm package manager.

### Available scripts for front-end

In the project client-side directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Available scripts for back-end

In the project server-side directory, you can run:

### `yarn install`

### `yarn start or yarn dev`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
