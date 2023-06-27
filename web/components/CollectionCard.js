import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({ collection }) => {
  const id = collection.node.id;
  const handle = collection.node.handle;
  const title = collection.node.title;
  const description = collection.node.description;
  const imageNode = collection.node.products.edges[0].node.images.edges[0].node

  return (
    <div
      className="
      w-full
      p-2
    "
    >
      <Link href={`/collections/${handle}`} passhref="true">
        <Image
          alt=""
          src={imageNode.url}
          width={imageNode.width}
          height={imageNode.height}
          className="w-full h-auto"
        />
      </Link>
      <div>
        <p className="text-center product-title text-l font-semibold mx-4 mt-4 mb-1">{title}</p>
        <p className="text-center product-price mb-4">{description}</p>
      </div>
    </div>
  );
}

export default CollectionCard;