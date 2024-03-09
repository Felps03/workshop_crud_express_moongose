# Workshop: Building RESTful APIs with CRUD Operations

Welcome to our workshop on building RESTful APIs using Node.js! This README will guide you through understanding the basics of REST and CRUD operations, setting up your environment, and testing your API with specific endpoints. By the end of this workshop, you will have a functional API for managing user data.

## Introduction to REST and CRUD

REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless, client-server communication, with operations being performed using standard HTTP methods. RESTful services expose a set of resources (e.g., books, users) where the resource can be manipulated using HTTP requests.

CRUD stands for Create, Read, Update, and Delete, which are the four basic functions of persistent storage (e.g., databases). CRUD operations correspond to the following HTTP methods:

- Create: POST
- Read: GET
- Update: PUT/PATCH
- Delete: DELETE

Combining REST principles with CRUD operations provides a standardized approach for interacting with resources, making it easier for developers to understand and use APIs.

## Setting Up Your Environment

Before we start, ensure you have Node.js and npm (Node Package Manager) installed on your system. You'll also need MongoDB running locally or set up a cloud instance, as our API will interact with a MongoDB database.

## API Endpoints and How to Test Them

### Check Server Health

```bash
curl http://localhost:3000/health
```

### Create a New User

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' http://localhost:3000/user
```

### Read All Users

```bash
curl http://localhost:3000/users
```

### Update a User by ID

For this command, you will need to replace `<user_id>` with the actual ID of the user you want to update.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Jane Doe"}' http://localhost:3000/user/<user_id>
```

### Delete a User by ID

Similarly, you will need to replace `<user_id>` with the actual ID of the user you want to delete.

```bash
curl -X DELETE http://localhost:3000/user/<user_id>
```

**Note:** Ensure your server is running locally on port 3000 and MongoDB is properly set up for these `curl` commands to work as expected. If you do not have a valid user ID for the update and delete operations, first create a user with the create request to obtain an ID, which can then be used for these operations.
```