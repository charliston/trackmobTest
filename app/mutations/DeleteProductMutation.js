import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Enviroment'

const mutation = graphql`
  mutation DeleteProductMutation($input: DeleteProductInput!) {
    deleteProduct(input: $input) {
      deletedId
    }
  }
`;

export default function DeleteProductMutation(productId, viewerId, callback) {
  const variables = {
    input: {
      id: productId,
      clientMutationId: ""
    },
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      onCompleted: (response) => {
        console.log(response);
        callback();
      },
      updater: (proxyStore) => {
        const deleteProductField = proxyStore.getRootField('deleteProduct');
        const deletedId = deleteProductField.getValue('deletedId');
        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ProductList_allProducts');
        ConnectionHandler.deleteNode(connection, deletedId);
      }
    },
  )
}
