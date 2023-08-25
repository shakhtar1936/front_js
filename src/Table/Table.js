import React from "react";
import Proptypes from "prop-types"
import Flag from "../assets/212967_f024_icon.svg"
import F0dc from "../assets/213129_f0dc_icon.svg"
import Up from "../assets/caret-up-solid.svg"

function Table(props){
    return(
        <div>
        <table className="w-[1280px] h-[238px] text-center bg-[#E1E0C1] border-collapse border border-[#DAD8B4] text-[25px]">
          <caption>Chess Rating</caption>
          <thead className="h-[41px]">
          <tr className="bg-[#D5D2A7]">
            <th className="w-[70px] font-[700] leading-3"><img src={Up} className="w-[10px] float-right"/>#</th>
            <th className="w-[70px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/><span className="text-green-800">↑</span><span className="text-red-800">↓</span></th>
            <th className="w-[300px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/>Name</th>
            <th className="w-[50px] leading-5"><img src={F0dc} className="w-[10px] float-right"/><img src={Flag} className="w-[20px] h-[20px] mr-auto ml-auto block"/></th>
            <th className="w-[130px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/>Rapid</th>
            <th className="w-[120px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/>+/-</th>
            <th className="w-[40px] "></th>
            <th className="w-[130px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/>Classic</th>
            <th className="w-[40px] "></th>
            <th className="w-[130px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/>Blitz</th>
            <th className="w-[40px] "></th>
            <th className="w-[40px] "></th>
            <th className="w-[80px] font-[700] leading-5"><img src={F0dc} className="w-[10px] float-right"/>Age</th>
            <th className="w-[40px] "></th>
          </tr>
          </thead>
          {props.data.map((val,key) => {
            return(
              <tbody key={key}>
              <tr>
                <td className="text-red-800 border-collapse border font-[700] border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.id}</td>
                <td className={val.change.includes("↑")? "text-green-800 border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]" : "text-red-800 border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]"}>{val.change}</td>
                <td className="pl-[20px] text-left border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.name}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.flag}</td>
                <td className="border-collapse border border-[#DAD8B4] text-red-800 font-[700] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.rapid}</td>
                <td className={parseInt(val.change_1) > 0 ? "text-green-800 border-collapse border border-[#DAD8B4] text-right pr-[10px] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]" : parseInt(val.change_1) === 0 ? "text-black border-collapse border border-[#DAD8B4] text-right pr-[10px] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]" : "text-red-800 border-collapse border border-[#DAD8B4] text-right pr-[10px] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]"}>{val.change_1}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.search_1}</td>
                <td className="border-collapse border border-[#DAD8B4] font-[700] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.classic}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.search_2}</td>
                <td className="border-collapse border border-[#DAD8B4] text-[#095F88] font-[700] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.blitz}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.empty}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.statistic}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.age}</td>
                <td className="border-collapse border border-[#DAD8B4] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3] ">{val.board}</td>
              </tr>
              </tbody>
            )
              }
          )}
        </table>
      </div>
    )
}

Table.propTypes = {
    data: Proptypes.arrayOf(Proptypes.object).isRequired
}

export default Table