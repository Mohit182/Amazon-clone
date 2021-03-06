const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KMu7USHGlORIkrwtCynpLqHcFeJG5NooqUYTfzpv5t1a0RZsTpoZnggzYvZP0EHm2xOb5MecvDko64uiuhK5CEP002TN2RVmD"
);
// Api

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api rouutes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Paymnet Request Recieved , amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
