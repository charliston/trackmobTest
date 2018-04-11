/**
 * @flow
 * @relayHash d7cafac68cfeb593e31aba09ca64ee94
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductForm_query$ref = any;
type ProductForm_viewer$ref = any;
export type ProductFormQueryVariables = {|
  id: string,
|};
export type ProductFormQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: ProductForm_viewer$ref,
  |},
  +$fragmentRefs: ProductForm_query$ref,
|};
*/


/*
query ProductFormQuery(
  $id: ID!
) {
  ...ProductForm_query
  viewer {
    ...ProductForm_viewer
    id
  }
}

fragment ProductForm_query on Query {
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

fragment ProductForm_viewer on Viewer {
  id
  allCategories {
    edges {
      node {
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
  "name": "ProductFormQuery",
  "id": null,
  "text": "query ProductFormQuery(\n  $id: ID!\n) {\n  ...ProductForm_query\n  viewer {\n    ...ProductForm_viewer\n    id\n  }\n}\n\nfragment ProductForm_query on Query {\n  node(id: $id) {\n    __typename\n    ... on Product {\n      id\n      title\n      price\n      description\n      imageUrl\n      category {\n        title\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ProductForm_viewer on Viewer {\n  id\n  allCategories {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductFormQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductForm_query",
        "args": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductForm_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductFormQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allCategories",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CategoryEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
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
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'e5e20075658d1a3e5d768bd316352491';
module.exports = node;
