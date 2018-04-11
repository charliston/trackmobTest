import { commitMutation, graphql } from 'react-relay'
import environment from '../Enviroment'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation UpdateProductMutation($input: UpdateProductInput!) {
    updateProduct(input: $input) {
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

export default function UpdateProductMutation(product, viewerId, callback) {

  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id: product.id,
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
      updater: (proxyStore) => {
        const createProductField = proxyStore.getRootField('updateProduct');
        const newProduct = createProductField.getLinkedRecord('product');
      }
    },
  )
}