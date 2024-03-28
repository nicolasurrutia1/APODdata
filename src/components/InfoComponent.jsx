import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/dataContext";

const InfoComponent = ({}) => {
  const indexNum = parseInt(useParams().index);
  const { data } = useDataContext();
  let source = data[indexNum].url
  let thumb = data[indexNum].thumbnail_url
    if(thumb !==undefined){
        source = thumb
    }

  return (
    <div className="flex text-left  p-3 flex-col md:flex-row">
      <div className="sm:w-full md:w-1/2 ">
        <img
          src={source}
          alt={data[indexNum].title}
          className="max-w-full"
        />
      </div>
      <div className="sm:w-full md:w-1/2 md:px-2 lg:px-5 ml-5 ">
        <h3 className="text-xl font-bold mb-5">{data[indexNum].title}</h3>
        <p className="text-base text-black mb-2">{data[indexNum].date}</p>
        <p className="text-base text-black mb-5">{data[indexNum].copyright}</p>
        <p className="text-base text-black mb-10 w-4/5">
          {data[indexNum].explanation}
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
