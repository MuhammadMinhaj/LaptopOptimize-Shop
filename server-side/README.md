## Laptop Optimize - Server Side (API's)

Demo - [Laptop Optimize Website](https://minhaj-laptopoptimize.web.app)

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

#### - Products management

**Get :** /api/products/single/:id

**Get :** /api/products/all

**Post :** /api/products/add

**Put :** /api/update/:id

**Delete :** /api/delete/:id

#### - Orders management

**Get :** /api/order/all

**Get :** /api/order/user/all

**Post :** /api/order/confirm

**Delete :** /api/order/delete/:id

**Put :** /api/order/status/:id

#### - Admin login and verify

**Post :** /api/admin/login

**Get :** /api/admin/login/verify

## Project inauguration procedure

Installing the dependencies that are related to the project using yarn or npm package manager.

### Available scripts

In the project server-side directory, you can run:

### `yarn install`

### `yarn start or yarn dev`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
