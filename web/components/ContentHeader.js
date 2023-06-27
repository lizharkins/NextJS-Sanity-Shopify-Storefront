const ContentHeader = ({ heading, subheading }) => {
  return (
    <div className="text-center">
      <h1 className="font-bold header-leading leading-tight text-5xl mt-4 py-2 sm:py-4">
        { heading }
      </h1>
      <p className="px-2 text-lg header-subheading">
        { subheading }
      </p>
    </div>
  );
};

export default ContentHeader;