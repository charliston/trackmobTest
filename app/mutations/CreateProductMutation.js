import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Enviroment'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      product {
        id
        description
        imageUrl
      }
    }
  }
`;

let tempID = 0;

export default function CreateProductMutation(product, viewerId, callback) {
  const variables = {
    input: {
      title: product.title,
      description: product.description,
      imageUrl,
      clientMutationId: ""
    },
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log(response, environment);
        callback()
      },
      onError: err => console.error(err),
      optimisticUpdater: (proxyStore) => {
        // 1 - create the `newProduct` as a mock that can be added to the store
        const id = 'client:newProduct:' + tempID++;
        const newProduct = proxyStore.create(id, 'Product');
        newProduct.setValue(id, 'id');
        newProduct.setValue(description, 'description');
        newProduct.setValue(imageUrl, 'imageUrl');

        // 2 - add `newProduct` to the store
        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allProducts');
        if (connection) {
          ConnectionHandler.insertEdgeAfter(connection, newProduct)
        }
      },
      updater: (proxyStore) => {
        // 1 - retrieve the `newProduct` from the server response
        const createProductField = proxyStore.getRootField('createProduct');
        const newProduct = createProductField.getLinkedRecord('product');

        // 2 - add `newProduct` to the store
        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allProducts');
        if (connection) {
          ConnectionHandler.insertEdgeAfter(connection, newProduct)
        }
      },
    },
  )
}