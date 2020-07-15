const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('views'));
const port = process.env.PORT || 5000;

const stripe = require('stripe')('sk_test_51H4TqMCUChgYYpJHoIoxwatxynwWVNVPSAXgcJh53KJfP7sI4pk13bVNb82eKxfXQZqtPow8CFFLUmcmnd8IGAYk005NPLX37Y');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
  // Verify your integration in this guide by including this parameter
  metadata: {integration_check: 'accept_a_payment'},
});

app.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', function (req, res) {
  res.render('index.html');
});
