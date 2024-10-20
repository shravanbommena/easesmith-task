import "./index.css";

const filtersList = [
  "Type of Plants",
  "Price",
  "Nursery",
  "Ideal Plants Location",
  "Indoor/ Outdoor",
  "Maintenance",
  "Plant Size",
  "Water Schedule",
  "Color",
  "Seasonal",
  "Light Efficient",
];

const PlantFilter = () => {
  return (
    <div className="filter-div text-base">
      <div className="flex justify-between">
        <h3>Filters</h3>
        <p>CLEAR ALL</p>
      </div>
      <ul>
        {filtersList.map((filter) => {
          return (
            <li key={filter}>
              <hr className="filter-hr" />
              <div className="flex justify-between">
                <p>{filter}</p>
                <p>+</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlantFilter;
