# stripe-products-lambda

A Lambda function for fetching Stripe products as part of a [Stripe Relay](relay) flow.

NOTE: this function is designed to only return `active` products.

## Authentication

Set your Stripe secret key in the `.env` file. Copy the sample to get started:

```
$ cp .env.sample .env
$ sed -i '' "s/<YOUR_SECRET_KEY>/$SECRET_KEY/g" .env
```

## Deployment and Usage

Use the script to create your zip archive:

```
$ npm run zip
```

Integrate with the [AWS API Gateway](gateway) to access the function via HTTP POST:

```
$ curl -H "Content-Type: application/json" $API_GATEWAY_URL
```

### Response

Returns `products.data` from the [response](products) under the root key of `products`:

```
{
  "products": [
    ...products
  ]
}
```

[gateway]: http://docs.aws.amazon.com/lambda/latest/dg/gs-amazon-gateway-integration.html
[products]: https://stripe.com/docs/api/node#list_products
[relay]: https://stripe.com/docs/relay
