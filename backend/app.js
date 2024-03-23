import fs from "node:fs/promises";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  const meals = await fs.readFile("./data/available-meals.json", {
    encoding: "utf-8",
  });
  res.json(JSON.parse(meals));
});

app.use("/orders", async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || !Array.isArray(orderData.items)) {
    return res.status(400).json({
      message: "Missing Data",
    });
  }

  if (
    !orderData.customer ||
    orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === "" ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === "" ||
    orderData.customer["postal-code"] === null ||
    orderData.customer["postal-code"].trim() === "" ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ""
  ) {
    return res.status(400).json({
      message:
        "Missing data: Email, name, street, postal code or city is missing.",
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random()*1000).toString()
  }

  const orders = await fs.readFile("./data/orders.json", {encoding: "utf-8"})
  const allOrders = JSON.parse(orders)
  allOrders.push(newOrder)
  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders))

  res.status(201).json({message: "order has been created"})
});


app.listen(5000, () => console.log("listening at 5000"))