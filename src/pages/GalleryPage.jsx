import { useApodStore } from "../stores/useApodStore";
import GalleryGrid from "../components/GalleryGrid";
import LoadingComponent from "../components/LoadingComponent";

const GalleryPage = () => {
  const { data, loading, error, reloadData, isRefetching } = useApodStore();

  const handleReloadData = () => {
    reloadData();
  };

  if (loading || !data) {
    return <LoadingComponent />;
  }
  if (error) {
    return (
      <div>
        <h2>Something went wrong! Please try again.</h2>
        <p>{error}</p>
        <button
          onClick={handleReloadData}
          className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-4 py-3 mr-5 rounded w-28 mb-10"
        >
          Retry
        </button>
      </div>
    );
  }
  return (
    <section>
      <button
        onClick={handleReloadData}
        disabled={isRefetching}
        className={`bg-blue-900 hover:bg-blue-950 text-white font-semibold px-4 py-3 mr-5 rounded w-28 mb-10 ${isRefetching ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isRefetching ? "Refreshing..." : "Explore"}
      </button>
      <GalleryGrid />
    </section>
  );
};
export default GalleryPage;
