"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [meteos, setMeteos] = useState([
    {
      name: "00:00:00",
      pv: 15,
      amt: 2400,
    },
    {
      name: "03:00:00",
      pv: 20,
    },
    {
      name: "06:00:00",
      pv: 35,
    },
    {
      name: "09:00:00",
      pv: 10,
    },
    {
      name: "12:00:00",
      pv: 5,
    },
    {
      name: "15:00:00",
      pv: 7,
    },
    {
      name: "18:00:00",
      pv: 9,
    },
    {
      name: "21:00:00",
      pv: 40,
    },
  ]);

  return (
    <div>
      <Navbar />
      <br />

      <div className="container mx-auto">
        <h2 className="px-6">11/11/2024 - Longjumeau, FR</h2>
        <br />

        <ResponsiveContainer width={"100%"} height={300}>
          <LineChart
            width={500}
            height={300}
            data={meteos}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 10, 20, 30, 40]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
