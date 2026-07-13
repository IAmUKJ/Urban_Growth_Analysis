import {
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function UrbanGrowthPlots({ data, mode }) {

  if (!data || data.length === 0) return null;

  const topImages =
    [...data]
      .sort((a,b)=>b.urban_growth-a.urban_growth)
      .slice(0,10);

  return (

    <div className="bg-white rounded-xl shadow p-6">

      {mode === "top" && (

        <>
          <h2 className="font-semibold mb-4">
            Top Urban Growth Images
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={topImages}>

              <CartesianGrid strokeDasharray="3 3"/>

              <XAxis dataKey="image_id"/>

              <YAxis/>

              <Tooltip/>

              <Bar
                dataKey="urban_growth"
                fill="#ef4444"
              />

            </BarChart>

          </ResponsiveContainer>
        </>
      )}


      {mode === "scatter" && (

        <>
          <h2 className="font-semibold mb-4">
            Urban Growth Scatter
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <ScatterChart>

              <CartesianGrid/>

              <XAxis dataKey="image_id"/>

              <YAxis dataKey="urban_growth"/>

              <Tooltip/>

              <Scatter
                data={data}
                fill="#ef4444"
              />

            </ScatterChart>

          </ResponsiveContainer>
        </>
      )}

    </div>
  );
}