import React from 'react'

const TrainBooking = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md max-w-md md:max-w-xl mt-10  mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Train Booking</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700"
          >
            From
          </label>
          <input
            type="text"
            id="from"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter departure station"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700"
          >
            To
          </label>
          <input
            type="text"
            id="to"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter arrival station"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="trainNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Train Number
          </label>
          <input
            type="text"
            id="trainNumber"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="trainName"
            className="block text-sm font-medium text-gray-700"
          >
            Train Name
          </label>
          <input
            type="text"
            id="trainName"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter train name"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Book Train
        </button>
      </form>
    </div>
  )
}

export default TrainBooking
