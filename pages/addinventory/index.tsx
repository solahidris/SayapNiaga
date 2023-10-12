// directory: src/pages/addInventory/index.tsx

const AddInventoryPage = () => {
  return (
    <div>
      
      <div>
        <h1>Add Inventory</h1>
      </div>

      <div className="bg-blue-500 py-10 flex flex-col gap-2">
        <h1>Car Details</h1>
        <div className="flex gap-2">
          <span>Brand</span>
          <input type="text" />
        </div>
        <div className="flex gap-2">
          <span>Model</span>
          <input type="text" />
        </div>
        <div className="flex gap-2">
          <span>All State</span>
          <input type="text" />
        </div>
        <div className="flex gap-2">
          <span>Price</span>
          <input type="text" />
        </div>
      </div>

    </div>
  );
};

export default AddInventoryPage;
