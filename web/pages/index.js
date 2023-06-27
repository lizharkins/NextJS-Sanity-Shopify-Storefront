import { Fragment } from "react"
import ProductsList from "../components/ProductList"
import Navigation from "../components/Navigation";
import CollectionsList from "@/components/CollectionsList";
import ContentHeader from "@/components/ContentHeader";
import CollectionsHeader from "@/components/CollectionsHeader";
import Main from "@/components/Main";
import ProductsSection from "@/components/ProductsSection";
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity";
import {  callShopify, AllProducts, AllCollectionsAugmented } from "../helpers/shopify"

const homepageQuery = groq`*[_type == "homepage"]{
  heroTitle,
  heroSubtitle
}[0]`;

const Home = ({ products, collections, content }) => {
  const { homepageData } = content;

  const tempContent = {
    // heading: "Your Home, Reimagined",  // sanitized? sanity-ized?
    // subheading: "Reimagine your living room with our sofas and chairs.",
    collectionsHeading: "Our Collections",
    collectionsSubheading: "Reimagine your home with our collections."
  };

  const handleScroll = (e) => {
    e.preventDefault();

    const { href } = e.currentTarget;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "center", 
      inline: "nearest"
    })
  }

  return (
    <Fragment>
      <ContentHeader heading={ homepageData?.heroTitle } subheading={homepageData?.heroSubtitle} />
      <Main>
        <Navigation collections={ collections } handleScroll={handleScroll} />
        <CollectionsHeader heading={ tempContent.collectionsHeading } subheading={ tempContent.collectionsSubheading } />
        <CollectionsList collections={ collections } />
        <ProductsSection />
        <ProductsList products={ products } />
      </Main>
    </Fragment>
  )
}

export async function getStaticProps() {
  const storefrontProducts = await callShopify(AllProducts);
  const products = storefrontProducts.data.products.edges;

  const storefrontCollections = await callShopify(AllCollectionsAugmented);
  const collections = storefrontCollections.data.collections.edges;

  const homepageData = await getClient().fetch(homepageQuery, {});

  return {
    props: {
      products,
      collections,
      content: {
        homepageData,
      },
    },
  }
}

export default Home;