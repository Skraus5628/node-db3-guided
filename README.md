# Multi-Table Queries

Guided project for **Node DB 3** Module.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org) installed.
- A rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- [This Query Tool Loaded in the browser](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor creates database access methods for a multi table schema.


<!-- 
SELECT * FROM "OrderDetail" LIMIT 1;
--SELECT * FROM "Product" WHERE "id" = 11;
 
 --To do this as one table instead of multiple--

--SELECT "OrderDetail"."Id", "OrderDetail"."Quantity", "Product"."ProductName"
--FROM "OrderDetail"
--JOIN "Product" ON "OrderDetail"."ProductId" = "Product"."Id"

--Using Aliases cleans up your query--

SELECT o."Id", o."Quantity", p."ProductName"
FROM "OrderDetail" AS o
JOIN "Product" AS p
ON o."ProductId" = p."Id";
 -->

 <!-- 
 SELECT e."FirstName", e."LastName"
FROM "Order" AS o
JOIN "Employee" AS e
ON e."Id" = o."EmployeeId"
WHERE o."Id" = 16608 -->

<!-- example of selecting values from multiple tables with joins, and using values 
to rename displayed columns -->
<!-- 
SELECT e."FirstName" EmployeeFirstName, 
e."LastName" EmployeeLastName, 
c."ContactName" CustomerName
FROM "Order" AS o
JOIN "Employee" AS e ON e."Id" = o."EmployeeId"
JOIN "Customer" AS c ON c."Id" = o."CustomerId"
WHERE o."Id" = 16608
 -->

 <!--  First Half SUmmary
 
    -- Rows can link to other rows in a separate table using foreign keys
    -- We can query data from those linked tables using JOIN statements
    -- If the linked row doesn't exist, the join type (inner/left) will determine whether a result is still returned.


-->

<!-- aggregate funkshuns
    SELECT SUM("Quantity") AS Total
    FROM "OrderDetail"
    WHERE "ProductId" = 11;
 -->
 <!-- 
 SELECT "ProductId", SUM("Quantity") AS Total
FROM "OrderDetail"
GROUP BY "ProductId"
ORDER BY Total DESC -->