var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        product(id: Int!): Product
        products(category: String): [Product]
        productPack(id: Int): ProductPack
        categories: [Category]
        basket(id: Int): Basket
        deliveryMethods(weight: Int): [DeliveryMethod]
    },
    type Mutation {
      createProduct(id: Int!, name: String, color: String, category: String, url: String): Product!
      updateProduct(id: Int!, name: String, color: String, category: String, url: String): Product!
      deleteProduct(id: Int!): Int!
      deleteProductPack(id: Int!): Int!
    },
    type Product {
        id: Int
        name: String
        color: String
        description: String
        category: String
        url: String
    },
    type ProductPack {
        id: Int
        name: String
        description: String
        products: [Product]
    },
    type Category {
        id: Int
        name: String
        description: String
    },
    type Basket {
        id: Int
        products: [Product]
    },
    type DeliveryMethod {
      id: Int  
      name: String
      price: Int
      weight: Int
    }
`);


var productsData = [
  {
    id: 1,
    name: 'Otus-chair',
    color: 'white',
    description: 'Comfortable chair for your job',
    category: 'Chairs',
    url: 'http://example.com'
  },
  {
    id: 2,
    name: 'Otus-table',
    color: 'red',
    description: 'Beautiful red table',
    category: 'Tables',
    url: 'http://example.com'
  },
  {
    id: 3,
    name: 'Otus-sofa',
    color: 'black',
    description: 'Black sofa',
    category: 'Sofas',
    url: 'http://example.com'
  }
]

var categories = [
  {
    id: 1,
    name: 'Tables',
    description: 'tables for office'
  },
  {
    id: 2,
    name: 'Chairs',
    description: 'chairs for office'
  },
  {
    id: 3,
    name: 'Sofas',
    description: 'sofas for office'
  }
]
var productPacksData = [
  {
    id: 1,
    name: 'officepack',
    description: 'Table and chair',
    products: [productsData[0], productsData[1]]
  }
]

var baskets = [
  {
    id: 1,
    products: []
  }
]

var deliveryMethods = [
  {
    id: 1,
    name: 'pickup point',
    price: 200,
    weight: 20
  },
  {
    id: 2,
    name: 'postal office',
    price: 100,
    weight: 10
  }
]

var getProduct = function (args) {
  var id = args.id;
  return productsData.filter(product => {
    return product.id == id;
  })[0];
}
var getProducts = function (args) {
  if (args.category) {
    var category = args.category;
    return productsData.filter(product => product.category === category);
  } else {
    return productsData.reduce((categories, product) => {
      return [...categories, product.category];
    }, []);
  }
}
var getCategories = function () {
  return categories;
}
var getProductPack = function ({ id }) {
  return productPacksData.filter(productPack => productPack.id === id);
}
var getBasket = function ({ id }) {
  return baskets.filter(basket => basket.id === id);
}
var getDeliveryMethods = function ({ weight }) {
  return deliveryMethods.filter(deliveryMethod => deliveryMethod.weight >= weight);
}
var createProduct = function ({ id, name, color, category, url }) {
  var newProduct = { id, name, color, category, url };

  productsData.push(newProduct);

  return newProduct;
}
var updateProduct = function ({id, name, color, category, url}) {
  var currentProduct = productsData.find(product => product.id == id)

  if (name) {
    currentProduct.name = name;
  }

  if (color) {
    currentProduct.color = color;
  }

  if (category) {
    currentProduct.category = category;
  }

  if (url) {
    currentProduct.url = url;
  }

  return currentProduct;
}

var deleteProduct = function({id}) {
  delete productsData.find(product => product.id == id);

  return id;
}

var deleteProductPack = function({id}) {
  delete productPacksData.find(productPack => productPack.id == id);

  return id;
}

var root = {
  product: getProduct,
  products: getProducts,
  categories: getCategories,
  productPack: getProductPack,
  basket: getBasket,
  deliveryMethods: getDeliveryMethods,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  deleteProductPack: deleteProductPack
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));