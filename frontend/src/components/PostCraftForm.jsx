import React, { useState } from 'react';

const PostCraftForm = () => {
  const [craft, setCraft] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
    images: [],
    dimensions: '',
    materials: '',
    craftType: '',
    customization: '',
    deliveryOptions: [],
    deliveryTime: '',
    tags: '',
    contactInfo: '',
    returnPolicy: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCraft({
      ...craft,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    setCraft({
      ...craft,
      images: Array.from(e.target.files),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Craft posted:', craft);
    // Add logic to post the craft data to your backend
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl bg-white rounded-lg p-10 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post Your Craft</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Craft Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={craft.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Craft Description</label>
            <textarea
              id="description"
              name="description"
              value={craft.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={craft.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select a category</option>
              <option value="Pottery">Pottery</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Painting">Painting</option>
              <option value="Textiles">Textiles</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-gray-700">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={craft.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-gray-700">Quantity Available</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={craft.quantity}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="images" className="block text-gray-700">Upload Images</label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleImageUpload}
              multiple
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dimensions" className="block text-gray-700">Craft Dimensions</label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={craft.dimensions}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="materials" className="block text-gray-700">Materials Used</label>
            <input
              type="text"
              id="materials"
              name="materials"
              value={craft.materials}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Craft Type</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="craftType"
                  value="Handmade"
                  checked={craft.craftType === 'Handmade'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Handmade</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="craftType"
                  value="Machine-made"
                  checked={craft.craftType === 'Machine-made'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Machine-made</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="craftType"
                  value="Customizable"
                  checked={craft.craftType === 'Customizable'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Customizable</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="customization" className="block text-gray-700">Customization Options (Optional)</label>
            <textarea
              id="customization"
              name="customization"
              value={craft.customization}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Delivery Options</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="deliveryOptions"
                  value="Local Pickup"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Local Pickup</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="deliveryOptions"
                  value="Nationwide Shipping"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Nationwide Shipping</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="deliveryOptions"
                  value="International Shipping"
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">International Shipping</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="deliveryTime" className="block text-gray-700">Delivery Time (Days)</label>
            <input
              type="number"
              id="deliveryTime"
              name="deliveryTime"
              value={craft.deliveryTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-700">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={craft.tags}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Add tags separated by commas"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-gray-700">Contact Information</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={craft.contactInfo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="returnPolicy" className="block text-gray-700">Return Policy</label>
            <textarea
              id="returnPolicy"
              name="returnPolicy"
              value={craft.returnPolicy}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="additionalNotes" className="block text-gray-700">Additional Notes (Optional)</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={craft.additionalNotes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black  text-white px-10 py-2 rounded-full rounded-bl-sm transition duration-300"
            >
              Post Craft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCraftForm;
