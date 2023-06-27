const CollectionsHeader = ({ heading, subheading }) => {
  return (
    <div className="text-center w-full">
      <h1 className="header-leading leading-tight text-3xl mt-4 py-2 sm:py-4">
        { heading }
      </h1>
      {/* <p className="px-2 text-lg header-subheading">
        { subheading }
      </p> */}
    </div>
  );
};

export default CollectionsHeader;