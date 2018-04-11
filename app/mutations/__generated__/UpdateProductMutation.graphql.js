/**
 * @flow
 * @relayHash 4924273125483d5c11beda7b1cb8a34e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProductMutationVariables = {|
  input: {
    description?: ?string,
    id: string,
    imageUrl?: ?string,
    price?: ?number,
    title?: ?string,
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
export type UpdateProductMutationResponse = {|
  +updateProduct: ?{|
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
mutation UpdateProductMutation(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
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
    "type": "UpdateProductInput!",
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
    "name": "updateProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateProductInput!"
      }
    ],
    "concreteType": "UpdateProductPayload",
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
  "name": "UpdateProductMutation",
  "id": null,
  "text": "mutation UpdateProductMutation(\n  $input: UpdateProductInput!\n) {\n  updateProduct(input: $input) {\n    product {\n      id\n      description\n      imageUrl\n      price\n      title\n      category {\n        id\n        title\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProductMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
(node/*: any*/).hash = '58c45f5fa950e7d80201a9528178eadd';
module.exports = node;
