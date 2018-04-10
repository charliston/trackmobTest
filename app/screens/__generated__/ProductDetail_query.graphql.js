/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type ProductDetail_query$ref: FragmentReference;
export type ProductDetail_query = {|
  +node: ?{|
    +id?: string,
    +title?: string,
    +price?: ?number,
    +description?: ?string,
    +imageUrl?: ?string,
    +category?: {|
      +title: string,
    |},
  |},
  +$refType: ProductDetail_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ProductDetail_query",
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            v0,
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
(node/*: any*/).hash = '685279371ad78d85e240ea5d1eda60b7';
module.exports = node;
