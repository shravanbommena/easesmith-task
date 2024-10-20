/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ThankYou = (props) => {
  console.log(props);
  const history = useHistory();
  const { title, imagePath } = history.location.state.plantDetails;

  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <div>
          <img src={imagePath} alt="title" />
          <p className="text-center text-2xl mt-3 mb-3">{title}</p>
        </div>
        <div>
          Thank You for your interest in{" "}
          <span className="text-green-800 font-semibold text-xl">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
