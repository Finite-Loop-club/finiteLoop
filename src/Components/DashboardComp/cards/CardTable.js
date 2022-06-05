import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import src from '../../../assets/member/core/johnWick.png'
// import { firestore } from "../../../firebase";
// components

import TableDropdown from "../Dropdowns/TableDropdown";
import { data } from "autoprefixer";

export default function CardTable({ color }) {


  // useEffect(() => {
  //   const fetchMember = async () => {
  //     const doc = await firestore
  //       .collection("members")
  //       .doc("4NM19CS050")
  //       .get();

  //     const data = doc.data();
  //     console.log("data " + data);
  //     if (!data) {
  //       // document didn't exist
  //       console.log("hit null");
  //       setCart(null)
  //     } else {
  //       console.log("hit");
  //       setCart(data.cart);
  //     }
  //     console.log("cart " + cart);
  //   }

  //   fetchCart();
  // }, []);



return (
  <>
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-sky-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-slate-700" : "text-white")
              }
            >
              Members Details
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                }
              >
                Name
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                }
              >
                USN
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                }
              >
                Phone
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                }
              >
                Email
              </th>

            </tr>
          </thead>
          <tbody>

            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                  src={src}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-slate-600" : "text-white")
                  }
                >
                  Argon Design System
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                $2,500 USD
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i> pending
              </td>

              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i> pending
              </td>

              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </>
);
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
