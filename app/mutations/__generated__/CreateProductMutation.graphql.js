/**
 * @flow
 * @relayHash 8769f0815309651386c7c30b83d21332
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProductMutationVariables = {|
  input: {
    description?: ?string,
    imageUrl?: ?string,
    price?: ?number,
    title: string,
    categoryId?: ?string,
    category?: ?{
      title: string,
      productsIds?: ?$ReadOnlyArray<string>,
      products?: ?$ReadOnlyArray<{
        description?: ?string,
        imageUrl?: ?string,
        price?: ?number,
        title: string,
      }>,
    },
    clientMutationId: string,
  },
|};
export type CreateProductMutationResponse = {|
  +createProduct: ?{|
    +product: ?{|
      +id: string,
      +description: ?string,
      +imageUrl: ?string,
      +price: ?number,
      +title: string,
      +category: {|
        +id: string,
        +title: string,
      |},
    |},
  |},
|};
*/


/*
mutation CreateProductMutation(
  $input: CreateProductInput!
) {
  createProduct(input: $input) {
    product {
      id
      description
      imageUrl
      price
      title
      category {
        id
        title
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateProductInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateProductInput!"
      }
    ],
    "concreteType": "CreateProductPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
        "storageKey": null,
        "args": null,
        "concreteType": "Product",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "Category",
            "plural": false,
            "selections": [
              v1,
              v2
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateProductMutation",
  "id": null,
  "text": "mutation CreateProductMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    product {\n      id\n      description\n      imageUrl\n      price\n      title\n      category {\n        id\n        title\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProductMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
(node/*: any*/).hash = 'a798525715a1ad48c5a797f0bd9ad090';
module.exports = node;
