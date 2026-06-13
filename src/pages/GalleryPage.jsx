import { Compass } from "lucide-react";
import { useApodStore } from "../stores/useApodStore";
import GalleryGrid from "../components/GalleryGrid";
import LoadingComponent from "../components/LoadingComponent";

const GalleryPage = () => {
  const { data, loading, error, reloadData } = useApodStore();

  const handleReloadData = () => {
    reloadData();
  };

  if (loading || !data) {
    return <LoadingComponent />;
  }

  if (error) {
    return (
      <div className="text-center">
        <h2 className="text-card-foreground text-xl font-medium mb-2">
          Something went wrong! Please try again.
        </h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <button
          type="button"
          onClick={handleReloadData}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-[0.85rem]"
        >
          <Compass className="w-3.5 h-3.5" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <section>
      <GalleryGrid />
    </section>
  );
};

export default GalleryPage;
