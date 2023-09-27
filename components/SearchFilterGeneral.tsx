// directory: src/components/SearchFilterGeneral.tsx (SearchFilterGeneral)

import React, { useEffect, useState } from "react";

const SearchFilterGeneral = () => {

  const [brandSelected, setBrandSelected] = useState("");
  const [modelSelected, setModelSelected] = useState("");
  const [yearSelected, setYearSelected] = useState("");
  const [filteredModelsList, setFilteredModelsList] = useState([]);
  const [filteredYearList, setFilteredYearList] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500000 });


  const carList = [
    {
      brand: "Mercedes Benz",
      model: "A180",
      year: "2017",
      ID: "43421",
      bodyType: "Sedan",
      price: 0,
    },
    {
      brand: "Mercedes Benz",
      model: "A35",
      year: "2019",
      ID: "44472",
      bodyType: "Sedan",
      price: 288000,
    },
    {
      brand: "Toyota",
      model: "Vellfire",
      year: "2017",
      ID: "41831",
      bodyType: "MPV",
      price: 199000,
    },
    {
      brand: "Toyota",
      model: "Alphard",
      year: "2016",
      ID: "42674",
      bodyType: "MPV",
      price: 190000,
    },
    {
      brand: "MINI",
      model: "Cooper S 2.0",
      year: "2016",
      ID: "42690",
      bodyType: "Coupe",
      price: 151000,
    },
    {
      brand: "MINI",
      model: "One",
      year: "2016",
      ID: "44467",
      bodyType: "Coupe",
      price: 118000,
    },
  ];

  // Extract Unique brands
  const uniqueBrands = Array.from(
    new Set(carList.map((car) => car.brand))
  );
  // Handle Brand Select
  const handleBrandSelect = (e:any) => {
    setBrandSelected(e.target.value);
    console.log("selected brand:", brandSelected);
  }

  // Filter models based on selected brand
  useEffect(() => {
    if (brandSelected === "all") {
      setFilteredModelsList(carList);
      console.log("Brand Selceted:", brandSelected);
      console.log("All models:", carList);
    } else {
      const models = carList.filter((car) => car.brand === brandSelected);
      setFilteredModelsList(models);
      console.log("Brand Selceted:", brandSelected);
      console.log("Filtered models:", models);
    }
    if (modelSelected === "all") {
      setFilteredYearList(carList);
      console.log("Model Selceted:", modelSelected);
      console.log("All years:", carList);
    } else {
      const years = carList.filter((car) => car.model === modelSelected);
      setFilteredYearList(years);
      console.log("Model Selceted:", modelSelected);
      console.log("Filtered years:", years);
    }
  }, [brandSelected, modelSelected]);

  // Extract Unique Model
  const uniqueModels = Array.from(
    new Set(filteredModelsList.map((car) => car.model))
  );
  // Handle Model Select
  const handleModelSelect = (e:any) => {
    setModelSelected(e.target.value);
    console.log("selected model:", modelSelected);
  }

  // Extract Unique Year
  const uniqueYear = Array.from(
    new Set(filteredYearList.map((car) => car.year))
  );
  // Extract All Years
  const allYears = Array.from(
    new Set(carList.map((car) => car.year))
  );
  // Handle Year Select
  const handleYearSelect = (e:any) => {
    setYearSelected(e.target.value);
    console.log("selected model:", yearSelected);
  }
  // Render Year based on if User picked Make/Model or not
  const yearToRender = (brandSelected === "" || modelSelected === "") ? allYears : uniqueYear;


  // Handle Price Range Input
  const handlePriceRangeChange = (e) => {
    setPriceRange({ ...priceRange, [e.target.name]: parseInt(e.target.value, 10) });
  };
  // Filter cars based on price range
  useEffect(() => {
    const { min, max } = priceRange;

    const filteredCars = carList.filter(
      (car) => parseInt(car.price, 10) >= min && parseInt(car.price, 10) <= max
    );

    setFilteredModelsList(filteredCars);
  }, [priceRange]);



  return (
    <div className="flex text-white">
      <div className="flex flex-col w-full">
        {/* Title */}
        <div className="py-4">
          <span className="text-lg font-semibold mb-0 px-4 py-2 rounded-lg tracking-wide bg-orange-5000 italic">Find your next car</span>
        </div>

        <div className="flex gap-8 justify-center">
          {/* Input Text */}
          <div className="flex items-center">
            <input type="text" placeholder="Search Car by Brand / Model / ID" className="w-[300px] h-[50px] px-4 py-2 rounded"/>
          </div>

          {/* Select Brand */}
          <div className="flex items-center">
            <select className={`p-2 rounded h-[50px] ${brandSelected === "" ? "text-zinc-400" : "text-black"}`} onChange={handleBrandSelect} defaultValue="all" >
              <option value="all" disabled>
                Brand
              </option>
              {uniqueBrands.map((brand, index)=>(
                <option key={index} value={brand} >
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Select Model */}
          <div className="flex items-center">
            <select className={`p-2 rounded h-[50px] ${modelSelected === "" ? "text-zinc-400" : "text-black"}`} onChange={handleModelSelect} defaultValue="all" >
              <option value="all" disabled>
                Model
              </option>
              {uniqueModels.map((model, index)=>(
                <option key={index} value={model} >
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Select Year */}
          <div className="flex items-center">
            <select className={`p-2 rounded h-[50px] ${yearSelected === "" ? "text-zinc-400" : "text-black"}`} onChange={handleYearSelect} defaultValue="all" >
              <option value="all" disabled>
                Year
              </option>
              {yearToRender.map((year, index)=>(
                <option key={index} value={year} >
                  {year}
                </option>
              ))}
            </select>
          </div>


          {/* Range Slider for Price Range */}
          <div className="flex flex-col">
            {/* <label htmlFor="priceRange" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Price Range
            </label> */}
            <input
              type="range"
              id="priceRange"
              name="min"
              min="0"
              max="500000"
              step="10000" // Adjust the step value as needed
              value={priceRange.min}
              onChange={handlePriceRangeChange}
              className="p-2 rounded w-[200px]"
            />
            <div className="flex justify-between">
              <span>RM{(priceRange.min).toLocaleString()}</span>
              <span>-</span>
              <span>RM{(priceRange.max).toLocaleString()}</span>
            </div>
            <input
              type="range"
              id="priceRange"
              name="max"
              min="0"
              max="500000"
              step="10000" // Adjust the step value as needed
              value={priceRange.max}
              onChange={handlePriceRangeChange}
              className="p-2 rounded w-[200px]"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-center">
            <button onClick={null} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Search</button>
          </div>  
          
        </div>
      </div>
    </div>
  );
};

export default SearchFilterGeneral;
