import React from "react";
import Proptypes from "prop-types"
import Flag from "../assets/212967_f024_icon.svg"
import F0dc from "../assets/213129_f0dc_icon.svg"
import Up from "../assets/caret-up-solid.svg"

function Table(props){
    return(
        <div>
        <table className="min-w-full text-center bg-[#E1E0C1] border-collapse text-[25px] table-auto">
          <caption>Chess Rating</caption>
          <thead>
          <tr className="bg-[#D5D2A7]">
            <th className="w-[70px] h-[45px] font-[700] leading-3"><img src={Up} className="w-[10px] float-right"/>#</th>
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
                <td scope="col" className="h-[45px] text-red-800 border solid font-[700] border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.id}</td>
                <td scope="col" className={val.change.includes("↑")? "text-green-800 border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]" : "text-red-800 border border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]"}>{val.change}</td>
                <td scope="col" className="pl-[20px] text-left border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.name}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.flag}</td>
                <td scope="col" className="border solid border-[#D2CEA9] text-red-800 font-[700] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.rapid}</td>
                <td scope="col" className={parseInt(val.change_1) > 0 ? "text-green-800 border border-[#D2CEA9] text-right pr-[10px] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]" : parseInt(val.change_1) === 0 ? "text-black border border-[#D2CEA9] text-right pr-[10px] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]" : "text-red-800 border border-[#D2CEA9] text-right pr-[10px] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]"}>{val.change_1}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.search_1}</td>
                <td scope="col" className="border solid border-[#D2CEA9] font-[700] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.classic}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.search_2}</td>
                <td scope="col" className="border solid border-[#D2CEA9] text-[#095F88] font-[700] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.blitz}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.empty}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.statistic}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3]">{val.age}</td>
                <td scope="col" className="border solid border-[#D2CEA9] bg-gradient-to-b from-[#E3E2C3] to-[#D2CEA9] via-[#E3E2C3] ">{val.board}</td>
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