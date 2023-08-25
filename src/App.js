import React from "react";
import Table from "./Table/Table";
import ChinaFlag from "./assets/Flag_of_the_People's_Republic_of_China.svg.png"
import NorwayFlag from "./assets/Flag_of_Norway.svg.webp"
import UsaFlag from "./assets/us-square-01.png"
import Search from "./assets/search.png"
import Stat from "./assets/stat.png"
import Board from "./assets/board2.png"

const data = [
  {id: 1, change: "", name: "Ding, Liren", flag: <img src={ChinaFlag} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, rapid: "2830.0", change_1: "0.0", search_1: null, classic: "2780.0", search_2: null, blitz: '2787 i', empty:null, statistic:<img src={Stat} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, age:30, board:<img src={Board} className="block ml-auto mr-auto w-[90%] h-[90%]"/>},
  {id: 2, change: "", name: "Carlsen, Magnus", flag: <img src={NorwayFlag} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, rapid: "2820.0", change_1: "-5.0", search_1: <img src={Search} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, classic: "2842.8", search_2: <img src={Search} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, blitz: "2887.0", empty:null, statistic:<img src={Stat} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, age:32,board:<img src={Board} className="block ml-auto mr-auto w-[90%] h-[90%]"/>},
  {id: 3, change: "", name: "So, Wesley", flag: <img src={UsaFlag} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, rapid: "2783.2", change_1: "-5.8", search_1: <img src={Search} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, classic: "2753.2", search_2: <img src={Search} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, blitz: "2765.0", empty:null, statistic:<img src={Stat} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, age:29,board:<img src={Board} className="block ml-auto mr-auto w-[90%] h-[90%]"/>},
  {id: 4, change: "↑1", name: "Caruana, Fabiano", flag: <img src={UsaFlag} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, rapid: "2767.4", change_1: "+4.4", search_1: <img src={Search} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, classic: "2792.4", search_2: <img src={Search} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, blitz: "2813.0", empty:null, statistic:<img src={Stat} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, age:31,board:<img src={Board} className="block ml-auto mr-auto w-[90%] h-[90%]"/>},
  {id: 5, change: "↓1", name: "Aronian, Levon", flag: <img src={UsaFlag} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, rapid: "2763.0", change_1: "0.0", search_1: null, classic: "2742.0", search_2: null, blitz: "2750.0", empty:null, statistic:<img src={Stat} className="block ml-auto mr-auto w-[90%] h-[90%]"/>, age:40,board:<img src={Board} className="block ml-auto mr-auto w-[90%] h-[90%]"/>}

]

function App() {
  return(
    <Table data={data}></Table>
  );
}

export default App;
