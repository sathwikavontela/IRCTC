import React from 'react'

const UpdateSeats = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md max-w-md md:max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Update Seat Availability
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="trainNumberUpdate"
            className="block text-sm font-medium text-gray-700"
          >
            Train Number
          </label>
          <input
            type="text"
            id="trainNumberUpdate"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seatCount"
            className="block text-sm font-medium text-gray-700"
          >
            Available Seats
          </label>
          <input
            type="number"
            id="seatCount"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter number of available seats"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Update Availability
        </button>
      </form>
    </div>
  )
}

export default UpdateSeats
