/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ProductForm_query$ref: FragmentReference;
export type ProductForm_query = {|
  +node: ?{|
    +id?: string,
    +title?: string,
    +price?: ?number,
    +description?: ?string,
    +imageUrl?: ?string,
    +category?: {|
      +title: string,
      +id: string,
    |},
  |},
  +$refType: ProductForm_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProductForm_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
      "type": "ID!"
    }
  ],
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
          "kind": "InlineFragment",
          "type": "Product",
          "selections": [
            v0,
            v1,
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
                v1,
                v0
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '6bda67332023537f05ea59dad4bdacfc';
module.exports = node;
