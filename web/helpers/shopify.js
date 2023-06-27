const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN

export async function callShopify(query, variables = {}) {
  const fetchUrl = `https://${domain}/api/2023-04/graphql.json`

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  }

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    )
    return data
  } catch (error) {
    console.log(error)
    throw new Error("Could not fetch products!")
  }
}

const gql = String.raw

export const AllProducts = gql`
  query Products {
    products(first: 22) {
      edges {
        node {
          id
          title
          handle
          images(first: 10) {
            edges {
              node {
                url
                width
                height
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

export const AllCollections = gql`
  query AllCollections {
    collections(first: 5) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;

export const AllCollectionsAugmented = gql`
  query AllCollections {
    collections(first: 5) {
      edges {
        node {
          id
          title
          handle
          description
          products(first: 5) {
            edges {
              node {
                id
                title
                handle
                images(first: 5) {
                  edges {
                    node {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ProductSlugs = gql`
  query ProductSlugs {
    products(first: 22) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export const CollectionSlugs = gql`
  query CollectionSlugs {
    collections(first: 5) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export const singleProduct = gql`
  query ProductDetails($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      images(first: 10) {
        edges {
          node {
            url
            width
            height
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

export const singleCollection = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      products(first: 4) {
        edges {
          node {
            id
            title
            handle
            images(first: 4) {
              edges {
                node {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const createCheckout = gql`
  mutation CreateCheckout($variantId: ID!) {
    checkoutCreate(input: {
      lineItems: [{ variantId: $variantId, quantity: 1 }]
    }) {
      checkout {
        webUrl
      }
    }
  }
`;