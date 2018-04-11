import { commitMutation, graphql } from 'react-relay'
import environment from '../Enviroment'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
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
`;
function sharedUpdater(store, viewer, newEdge) {
  const userProxy = store.get(viewer.id);
  const conn = ConnectionHandler.getConnection(userProxy, 'ProductList_allProducts');
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

export default function CreateProductMutation(product, viewerId, callback) {

  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          title: product.title,
          description: product.description,
          imageUrl: product.imageUrl,
          price: parseFloat(product.price),
          categoryId: product.category.id,
          clientMutationId: "",
        }
      },
      onCompleted: (response) => {
        console.log(response);
        callback()
      },
      onError: err => console.error(err),
      optimisticUpdater: (proxyStore) => {
        // 1 - create the `newProduct` as a mock that can be added to the store
        const id = 'client:newProduct:' + tempID++;
        const node = proxyStore.create(id, 'Product');
        node.setValue(id, 'id');
        node.setValue(product.title, 'title');
        node.setValue(product.description, 'description');
        node.setValue(product.imageUrl, 'imageUrl');
        node.setValue(product.price, 'price');

        const cid = 'client:newCategory:' + tempID++;
        const cnode = proxyStore.create(cid, 'Category');
        cnode.setValue(cid, 'id');
        cnode.setValue(product.category.title, 'title');
        node.setLinkedRecord(cnode, 'category');

        const newEdge = proxyStore.create(
          'client:newEdge:' + tempID++,
          'ProductEdge',
        );
        newEdge.setLinkedRecord(node, 'node');

        // 2 - add `newProduct` to the store
        const userProxy = proxyStore.get(viewerId);
        const conn = ConnectionHandler.getConnection(userProxy, 'ProductList_allProducts');
        ConnectionHandler.insertEdgeAfter(conn, newEdge);
      },
      updater: (proxyStore) => {
        console.log(proxyStore.getRootField('createProduct'));
        /**/

        // 1 - retrieve the `newProduct` from the server response
        const createProductField = proxyStore.getRootField('createProduct');
        const newProduct = createProductField.getLinkedRecord('product');

        console.log(newProduct)

        // 2 - add `newProduct` to the store
        /** /
        const userProxy = proxyStore.get(viewerId);
        const conn = ConnectionHandler.getConnection(userProxy, 'ProductList_allProducts');
        ConnectionHandler.insertEdgeAfter(conn, newProduct);
        /**/

      },
    },
  )
}