import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  CartesianGrid
} from "recharts";

export default function Charts({ data }) {

  if (!data || data.length === 0) return null;

  // Histogram bins
  const bins = [
    { range: "0-0.2", count: 0 },
    { range: "0.2-0.4", count: 0 },
    { range: "0.4-0.6", count: 0 },
    { range: "0.6-0.8", count: 0 },
    { range: "0.8-1.0", count: 0 }
  ];

  data.forEach(d => {
    const v = Number(d.iou) || 0;

    if (v < 0.2) bins[0].count++;
    else if (v < 0.4) bins[1].count++;
    else if (v < 0.6) bins[2].count++;
    else if (v < 0.8) bins[3].count++;
    else bins[4].count++;
  });

  return (

    <div className="grid md:grid-cols-2 gap-6">

      {/* IoU Histogram */}

      <div className="bg-white p-5 rounded-xl shadow">

        <h2 className="font-semibold mb-4">
          IoU Distribution
        </h2>

        <ResponsiveContainer width="100%" height={250}>

          <BarChart data={bins}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="range" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#6366f1"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>


      {/* IoU vs Dice Scatter */}

      <div className="bg-white p-5 rounded-xl shadow">

        <h2 className="font-semibold mb-4">
          IoU vs Dice Scatter
        </h2>

        <ResponsiveContainer width="100%" height={250}>

          <ScatterChart>

            <CartesianGrid />

            <XAxis
              type="number"
              dataKey="iou"
              name="IoU"
              domain={[0,1]}
            />

            <YAxis
              type="number"
              dataKey="dice"
              name="Dice"
              domain={[0,1]}
            />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />

            <Scatter
              data={data}
              fill="#10b981"
            />

          </ScatterChart>

        </ResponsiveContainer>

      </div>


      {/* Dice Trend */}

      <div className="bg-white p-5 rounded-xl shadow md:col-span-2">

        <h2 className="font-semibold mb-4">
          Dice Score Trend
        </h2>

        <ResponsiveContainer width="100%" height={250}>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="image_id" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="dice"
              stroke="#10b981"
              strokeWidth={2}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}