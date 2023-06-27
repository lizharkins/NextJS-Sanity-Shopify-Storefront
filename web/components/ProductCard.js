import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const id = product.node.id;
  const handle = product.node.handle;
  const title = product.node.title;
  const imageNode = product.node.images.edges[0].node;
  const price = product.node.priceRange?.maxVariantPrice.amount.replace(
    /\.0/g,
    ""
  );

  return (
    <div
      className="
      w-full
      md:w-1/2
      lg:w-1/3
      p-2
    "
    >
      <Link href={`/product/${handle}`} passhref="true">
        <Image
          alt=""
          src={imageNode.url}
          width={imageNode.width}
          height={imageNode.height}
          className="w-full h-auto"
        />
      </Link>
      <div>
        {title && <p className="text-center product-title text-l font-semibold mx-4 mt-4 mb-1">{title}</p>}
        {price && <p className="text-center product-price mb-4">${price}</p>}
      </div>
    </div>
  );
}

export default ProductCard;