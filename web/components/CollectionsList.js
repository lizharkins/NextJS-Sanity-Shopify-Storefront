import CollectionCard from "./CollectionCard";
import Typography from "@mui/material/Typography";
import { dataIsVerified } from "@/helpers/utils";

export default function CollectionsList({ collections }) {
  return (
    <div className="max-w-7xl grid grid-cols-2 content-center mx-auto w-full collections-list">
      {dataIsVerified(collections)
        ? collections.map((collection) => (
          <CollectionCard collection={collection} key={collection.node.id} />
        ))
        : <Typography variant="body1" align="center" style={{ color: "var(--color-primary)" }}>There are no collections to display.</Typography>
      }
    </div>
  );
}