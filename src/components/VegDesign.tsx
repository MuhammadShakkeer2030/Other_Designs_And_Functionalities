import React,{FC} from 'react'

const VegDesign:FC = () => {
  return (
    <div className=" flex flex-wrap gap-[20px]">
    {/* image gradient */}

    {[1, 2].map((image, index) => (
      <div className="relative w-[200px] h-[200px]  ">
        <img src="./img/avocado.png" alt="avocado image" className="w-full" />
        <div
          className={` bg-gradient-to-r from-gray-50  via-gray-300 to-gray-50  absolute inset-0 -z-10 shadow-green-900 shadow-2xl ${
            index === 0 ? `rounded-full` : ""
          }`}
        ></div>
      </div>
    ))}
    {/* image gradient */}

    {/* circle gradient */}
    <div className="w-[200px] h-[200px]  bg-gradient-to-r from-gray-50  via-gray-300 to-gray-50 rounded-full"></div>

    <div className="w-[200px] h-[200px] bg-gradient-to-b from-gray-900 to-gray-600"></div>

{/*  yellow gradient image */}
    {[1, 2].map((item, index) => (
      <div className={`w-[200px] h-[200px] shadow-2xl bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-white to-yellow-500 ${index === 1? `rounded-full`:""}`}>
        <img src="./img/avocado.png" alt="avocado" />
      </div>
    ))}
{/*  yellow gradient image end...... */}


    <div className="w-[200px] h-[200px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"></div>
  </div>
  )
}

export default VegDesign