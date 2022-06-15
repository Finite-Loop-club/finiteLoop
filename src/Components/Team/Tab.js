import React from 'react'

function Tab({year, setYear}) {

    const element = [
        "Faculty",
        "2021-22",
        "2020-21",
        "2017-20",
    ]


    return (
        <>
            <div className=" flex justify-center text-md font-medium text-center text-gray-500  border-gray-200 p-3 m-0">
                <ul className="flex flex-wrap -mb-px">

                    {element.map((index, key) => {
                        return (
                            <li key={key} className="mr-2">
                                <button onClick={()=> setYear(index)}  className={`inline-block px-4 py-2 rounded-t-lg border-b-2  border-transparent  hover:border-gray-300 
                                ${year===index ? "text-orange-600 border-orange-600 active":"hover:text-gray-600"}
                                `}> {index} </button>
                            </li>
                        )
                    })}

                    {/* 
                    <li onClick={console.log("2021")} className="mr-2">
                        <button className="inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500" aria-current="page">2021-22</button>
                    </li>
                    <li onClick={console.log("2020")} className="mr-2">
                        <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">2020-21</button>
                    </li>
                    <li onClick={console.log("2019")} className="mr-2">
                        <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">2017-20</button>
                    </li>
                     */}
                </ul>
            </div>

        </>
    )
}

export default Tab