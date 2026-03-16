import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/useDataContext";

const InfoComponent = () => {
  const indexNum = parseInt(useParams().index, 10);
  const { data } = useDataContext();

  if (!data || data.length === 0) {
    return <div className="p-5 text-center">Loading...</div>;
  }

  const item = data[indexNum];
  if (!item) {
    return (
      <div className="p-5 text-center">
        <p className="text-xl font-semibold mb-4">Photo not found.</p>
        <NavLink to="/" className="text-blue-900 underline">
          Back to gallery
        </NavLink>
      </div>
    );
  }

  let source = item.url;
  const thumb = item.thumbnail_url;
  if (thumb !== undefined) {
    source = thumb;
  }

  return (
    <div className="flex text-left  p-3 flex-col md:flex-row">
      <div className="sm:w-full md:w-1/2 ">
        <img
          src={source}
          alt={item.title}
          className="h-full w-full "
        />
      </div>
      <div className="sm:w-full md:w-1/2 md:px-2 lg:px-5 ml-5 ">
        <h3 className="text-xl font-bold mb-5">{item.title}</h3>
        <p className="text-base text-black mb-2">{item.date}</p>
        <p className="text-base text-black mb-5">{item.copyright}</p>
        <p className="text-base text-black mb-10 w-4/5">
          {item.explanation}
        </p>
        <div className="flex justify-center">
          <NavLink
            to={`/`}
            className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-3  rounded w-28 text-center"
          >
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
