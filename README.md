# 2300985_37_eva_IMS_Gold

Running the Inventory Management System Project

1. After cloning this repository, open your terminal and run:

    - `npm install`

2. Open the config file and configure it with your PostgreSQL DBMS settings. Then, in the terminal, execute the following commands:

    - `sequelize db:create`
    - `sequelize db:migrate`
    - `sequelize db:seed:all`

3. In the project's root folder, you will find a file named `.envexamp`. Open this file and adjust the `PORT` configuration according to your preference (In this example, I will use port 3000). After that, rename the file to `.env`.

4. In the terminal, run:

    - `npm start`

    The web application will run on the port you configured in step 3.

5. In your web browser, open the URL: `localhost:3000/users/home` to access the Inventory Management System.

6. If you want to experiment with adding product and promo banner images, it's recommended to use the provided dummy image files located in the `public/image/design_images/assets` folder.

User IDs:

-   Admin
    -   Email: admin1@gmail.com
    -   Password: 123

-   Customer
    -   Email: customer1@gmail.com
    -   Password: 123

IMPORTANT NOTE:
This website uses a relational database that links product IDs to price IDs. Because the product IDs are set to auto-increment, if you want to re-run the seed files, first run the following SQL command on the `tb_products` table to reset the sequence:

-   `ALTER SEQUENCE tb_products_id_seq RESTART INCREMENT BY 1`

This ensures that the seed file configurations linking product IDs to price IDs remain consistent.
