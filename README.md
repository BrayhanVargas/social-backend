
# Social Core Backend API

This is the backend of a social application that allows users to register, log in, create and view posts, and connect with other users. Developed with Node.js, Express, and PostgreSQL.

## Requirements and Configuration

Ensure Node.js and PostgreSQL are installed. Set up the database and adjust environment variables as needed.

## Installation and Execution

    1. Clone the repository: git clone <URL>

    2. Install dependencies: npm install

    3. Configure environment variables in a .env file. 

    4. Run the application: npm start


##  Folder Structure

The project follows an organized structure inspired by the MVC (Model-View-Controller) architecture, enhancing maintainability and clarity. Key components are organized as follows:

    /src: Contains the application's source code.
        /controllers: Controllers handling business logic.
        /models: Database model definitions.
        /routes: Application routes directing HTTP requests to corresponding controllers.
        /services: Services encapsulating application logic and shareable between controllers.
            /db: Service to db conection


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## API Reference

#### Create user

```http
  POST /user
```

| Parameter  | Type     | Description                    |
| :--------- | :------- | :------------------------------|
| `fullName` | `string` | **Required**. Full name user  |
| `age`      | `number` | **Required**. Age user         |
| `email`    | `string` | **Required**. Email user       |
| `password` | `string` | **Required**. Password user    |


#### Login

```http
  POST /login
```

| Parameter | Type     | Description                  |
| :-------- | :------- | :----------------------------|
| `email`    | `string` | **Required**. Email user    |
| `password` | `string` | **Required**. Password user |


#### Get Posts

```http
  GET /posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of user to fetch |


#### Create Posts

```http
  POST /posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of user to fetch |
| `title`   | `string` | **Required**. Title of the post   |
| `content` | `string` | **Required**. Content of the post |
