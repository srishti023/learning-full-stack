import React from 'react'

const Card = ({ elem, desc }) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden m-5">
      
      {/* Cover Image */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg"
          alt="cover"
          className="h-32 w-full object-cover"
        />

        {/* Profile Picture */}
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -bottom-12 transform -translate-x-1/2"
        />
      </div>

      {/* Content */}
      <div className="pt-14 pb-4 text-center">
        <h1 className="font-bold text-xl">{elem}</h1>
        <p className="text-gray-500 text-sm px-4">{desc}</p>

        {/* Stats */}
        <div className="flex justify-between mt-5 px-6">
          <div>
            <h2 className="font-bold">102.8K</h2>
            <p className="text-xs text-gray-400">Likes</p>
          </div>
          <div>
            <h2 className="font-bold">828</h2>
            <p className="text-xs text-gray-400">Posts</p>
          </div>
          <div>
            <h2 className="font-bold">342.9K</h2>
            <p className="text-xs text-gray-400">Views</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Follow
        </button>
      </div>
    </div>
  )
}

export default Card