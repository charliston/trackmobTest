/**
 * @flow
 * @relayHash e2e2f34c3944a5be6831a2fb1f335554
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductDetail_query$ref = any;
export type ProductDetailQueryVariables = {|
  id: string,
|};
export type ProductDetailQueryResponse = {|
  +$fragmentRefs: ProductDetail_query$ref,
|};
*/


/*
query ProductDetailQuery(
  $id: ID!
) {
  ...ProductDetail_query
}

fragment ProductDetail_query on Query {
  node(id: $id) {
    __typename
    ... on Product {
      id
      title
      price
      description
      imageUrl
      category {
        title
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductDetailQuery",
  "id": null,
  "text": "query ProductDetailQuery(\n  $id: ID!\n) {\n  ...ProductDetail_query\n}\n\nfragment ProductDetail_query on Query {\n  node(id: $id) {\n    __typename\n    ... on Product {\n      id\n      title\n      price\n      description\n      imageUrl\n      category {\n        title\n        id\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductDetail_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v1,
          {
            "kind": "InlineFragment",
            "type": "Product",
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "price",
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "category",
                "storageKey": null,
                "args": null,
                "concreteType": "Category",
                "plural": false,
                "selections": [
                  v2,
                  v1
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '7e416a355acfea483c31b477eff5d68a';
module.exports = node;
