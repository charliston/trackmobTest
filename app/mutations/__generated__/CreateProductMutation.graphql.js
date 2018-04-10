/**
 * @flow
 * @relayHash 12efbcd48578b81952fbf5edf1898412
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
v1 = [
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
  "text": "mutation CreateProductMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    product {\n      id\n      description\n      imageUrl\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProductMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '4f9e51b114d8091a1f0df274836ae13f';
module.exports = node;
