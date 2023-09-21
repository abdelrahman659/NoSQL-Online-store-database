# NoSQL-Online-store-database

No SQL online Store Database using (Nodejs ,express , mongodb)
This is the backend component of our online store application. It provides the server-side functionality for user authentication, product management, order processing, and more.

## At first you need to setup node Module

1. npm install (To install all node packages)
2. npm start (To Run the Node server)

- You don't need to run server ever time you make change in this code because i used (nodemon package)

3. If you want to end server press (ctrl + c )

## Second of all

** This is All API Routes you need **

1. **/user** to use user routes.

- **/user/register** to register or create user.
- **/user/login** after register you can login.

---

2. **/product** to use product routes.

- **/product/createProduct** to new create product.
- **/product/list** to show all products you create.

---

3. **/order** to use order routes.

- **/order/place-order** to assign user order.
- **/order/order-history/:userId** to show specific order (**_userId will be like this:65085d20813ca0cb0243abd1_**).

### Clone

```bash
git clone https://github.com/abdelrahman659/NoSQL-Online-store-database.git
---
```
