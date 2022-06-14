import React from 'react'

function Tab() {

    const year = [
        { val: "Faculty" },
        { val: "2021-22" },
        { val: "2020-21" },
        { val: "2017-20" },]


    return (
        <>
            <div className=" flex justify-center text-md font-medium text-center text-gray-500  border-gray-200 p-3 m-0">
                <ul className="flex flex-wrap -mb-px">

                    {year.map((index, key) => {
                        return (
                            <li className="mr-2">
                                <button key={key} className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"> {index.val} </button>
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