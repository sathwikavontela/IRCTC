import React, { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const SeatsChecking = () => {
  const [trainData] = useState([
    { _id: '1', from: 'Station A', to: 'Station B', availableSeats: 20 },
    { _id: '2', from: 'Station C', to: 'Station D', availableSeats: 15 },
    { _id: '3', from: 'Station E', to: 'Station F', availableSeats: 30 },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(10)

  const indexOfLastData = currentPage * dataPerPage
  const indexOfFirstData = indexOfLastData - dataPerPage
  const currentTrainData = trainData.slice(indexOfFirstData, indexOfLastData)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full mt-16">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow overflow-hidden rounded-lg border-b border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                View
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                From
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                To
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {currentTrainData.map((train) => (
              <tr key={train._id} className="bg-gray-50 odd:bg-gray-100">
                <td className="text-left py-3 px-4">
                  <Link to={`/train/view/${train._id}`}>
                    <IoEyeOutline className="text-blue-500 hover:text-blue-700" />
                  </Link>
                </td>
                <td className="text-left py-3 px-4">{train.from}</td>
                <td className="text-left py-3 px-4">{train.to}</td>
              </tr>
            ))}
            {trainData.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No train data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="relative flex justify-center mt-4 mb-6">
        <button
          className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
            indexOfLastData >= trainData.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastData >= trainData.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SeatsChecking
