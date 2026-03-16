import { useDataContext } from "../context/useDataContext";
import GalleryGrid from "./GalleryGrid";
import LoadingComponent from "./LoadingComponent";

const GaleryComponent = () => {  
  const { loading, error, reloadData } = useDataContext();

  const handleReloadData = () => {
    reloadData();
  };

  if (loading) {
    return (
      <LoadingComponent />
    );
  }
  if (error) {
    return (
      <div>
        <h2>Something went wrong! Please try again.</h2>
      </div>
    );
  }
  return (
    <section>
      <button
        onClick={handleReloadData}
        className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-4 py-3 mr-5 rounded w-28 mb-10"
      >
        Explore
      </button>
      <GalleryGrid />
    </section>
  );
};
export default GaleryComponent;