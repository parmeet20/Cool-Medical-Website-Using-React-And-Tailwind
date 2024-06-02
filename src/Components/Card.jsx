import React from 'react'

const Card = ({props}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={props.image}
      alt=""
      className='w-full rounded-lg h-[200px]'
    />
    <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200 pt-3">{props.heading}</h2>
    <p className="text-gray-600 dark:text-gray-400 mb-6">
      {props.desc}
    </p>
    <button className="bg-slate-800 dark:bg-slate-100 dark:text-slate-800 hover:bg-slate-700 text-white font-bold p-2 rounded-lg">
      {props.button}
    </button>
  </div>
  )
}

export default Card