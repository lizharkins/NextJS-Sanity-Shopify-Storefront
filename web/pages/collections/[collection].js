import { useState } from "react";
import Image from "next/image";
import { callShopify, CollectionSlugs, singleCollection } from "../../helpers/shopify";
import { dataIsVerified } from "@/helpers/utils";
import ProductCard from "@/components/ProductCard";

const CollectionDetails = ({ collectionData }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  !dataIsVerified(collectionData) && setIsLoading(true);
  
  const title = collectionData.title;
  const description = collectionData.description;
  const imageNode = collectionData.products.edges[0].node.images.edges[0].node;

  return (
    isLoading 
    ? 
      <div
        className="
          px-4
          sm:py-12
          py-4 w-full my-0 mx-auto
          max-w-7xl
        "
      >
        Wait for it...
      </div>
    :
      <div
        className="
          collection-section
          px-4
          sm:py-12
          md:flex-row
          py-4 w-full flex flex-col my-0 mx-auto
          max-w-7xl
        "
      >
      <h1
        className="
          sm:mt-0 mt-2 text-5xl font-light leading-large
        "
      >
        {title}
      </h1>
      <p className="leading-7 py-6">{description}</p>

      <div className="w-full flex flex-1">
        <div className="w-full h-full relative">
          <Image
            src={imageNode.url}
            alt=""
            width={imageNode.width}
            height={imageNode.height}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2 collection-wrapper-outer">
        {dataIsVerified(collectionData.products.edges) && (
          <div className="my-6 collection-wrapper-inner">
            {collectionData.products.edges.map((product) => (
              <ProductCard key={ product.node.id } product={ product } />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await callShopify(CollectionSlugs)
  const collectionSlugs = response.data.collections.edges

  const paths = collectionSlugs.map((slug) => {    
    const collection = String(slug.node.handle)
    return {
      params: { collection }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const response = await callShopify(singleCollection, { handle: params.collection })
  const collectionData = response.data.collection

  return {
    props: {
      collectionData,
    },
  }
}

export default CollectionDetails;