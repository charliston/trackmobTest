/**
 * @flow
 * @relayHash 9a2edcbd694df7a8044c513e418caf24
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProductMutationVariables = {|
  input: {
    id: string,
    clientMutationId: string,
  },
|};
export type DeleteProductMutationResponse = {|
  +deleteProduct: ?{|
    +deletedId: ?string,
  |},
|};
*/


/*
mutation DeleteProductMutation(
  $input: DeleteProductInput!
) {
  deleteProduct(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteProductInput!"
      }
    ],
    "concreteType": "DeleteProductPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteProductMutation",
  "id": null,
  "text": "mutation DeleteProductMutation(\n  $input: DeleteProductInput!\n) {\n  deleteProduct(input: $input) {\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProductMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'c96de06d75330f43f60f8cde6a9577f9';
module.exports = node;
