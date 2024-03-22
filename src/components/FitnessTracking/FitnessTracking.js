import React, { useState } from "react";
import { data } from "../data";
import AreaChart from "../Charts/AreaChart";
import LineChatu from "../Charts/LineChatu";
import BarChart from "../Charts/BarChart"

export default function Charts() {
	const [state] = useState(data);
	return (
		<>
		  <AreaChart state={state} />
		 <LineChatu state={state} />
			<BarChart state={state} />
		</>
	);
}