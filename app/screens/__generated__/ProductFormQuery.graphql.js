/**
 * @flow
 * @relayHash 036ebbc9e6444780e286390b287d7e17
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductForm_viewer$ref = any;
export type ProductFormQueryVariables = {| |};
export type ProductFormQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: ProductForm_viewer$ref,
  |},
|};
*/


/*
query ProductFormQuery {
  viewer {
    ...ProductForm_viewer
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductFormQuery",
  "id": null,
  "text": "query ProductFormQuery {\n  viewer {\n    ...ProductForm_viewer\n    id\n  }\n}\n\nfragment ProductForm_viewer on Viewer {\n  id\n  allCategories {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductFormQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
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
                      v0,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      }
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
(node/*: any*/).hash = '19385c20ef1ff85dcaf2b0d25a1bf34d';
module.exports = node;
