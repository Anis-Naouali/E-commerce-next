"use client"
import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import RootLayout from '@/app/layout';
import Chart, { ChartConfiguration } from "chart.js/auto";

const AdminDashboard = () => {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasEl.current?.getContext("2d") as CanvasRenderingContext2D | null;

    if (ctx) {
      const colors = {
        purple: {
          default: "rgba(149, 76, 233, 1)",
          half: "rgba(149, 76, 233, 0.5)",
          quarter: "rgba(149, 76, 233, 0.25)",
          zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
          default: "rgba(80, 102, 120, 1)",
          quarter: "rgba(80, 102, 120, 0.25)"
        }
      };

      const gradient = ctx.createLinearGradient(0, 16, 0, 600);
      gradient.addColorStop(0, colors.purple.half);
      gradient.addColorStop(0.65, colors.purple.quarter);
      gradient.addColorStop(1, colors.purple.zero);

      const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

      const labels = [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8",
        "Week 9",
        "Week 10"
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: gradient,
            label: "Product sell ",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.purple.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.purple.default,
            pointRadius: 3
          }
        ]
      };
      const config: ChartConfiguration = {
        type: "line",
        data: data
      };
      const myLineChart = new Chart(ctx, config);
      return function cleanup() {
        myLineChart.destroy();
      };
    }
  }, []);

  return (
    <RootLayout role="admin" >
      <div className="admin-dashboard flex">
        <div className="sidebar w-64 bg-gray-800 text-white p-4">
          <h1 className="logo text-2xl font-bold mb-4">Admin Dashboard</h1>
          <ul className="nav">
            <li className="mb-2">
              <Link href="/admin/users" className="text-white">Users</Link>
            </li>
            <li className="mb-2">
              <Link href="/admin/products" className="text-white">Products</Link>
            </li>
          </ul>
        </div>
        
        <div className="content flex-1 p-4 bg-gray-200">
          <h1 className="text-3xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
          <canvas id="myChart" ref={canvasEl} height="70" width="300"  />
        </div>
      </div>
      
    </RootLayout>
  );
};

export default AdminDashboard;
