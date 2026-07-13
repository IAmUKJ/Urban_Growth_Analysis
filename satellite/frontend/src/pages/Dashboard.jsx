import { useEffect, useState } from "react";
import axios from "axios";
import RecordCard from "../components/RecordCard";
import ToggleSwitch from "../components/ToggleSwitch";
import Charts from "../components/Charts";
import UrbanGrowthPlots from "../components/UrbanGrowthPlots";

export default function Dashboard() {

  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [showCharts, setShowCharts] = useState(false);

  const [growthMode, setGrowthMode] = useState("top");

  const [filters, setFilters] = useState({
    minIoU: 0,
    minDice: 0,
    minGrowth: 0,
    maxGrowth: 100,
    minId: 0,
    maxId: 100000
  });

  useEffect(() => {

    axios.get("http://localhost:5000/api/results")
      .then(res => {
        setResults(res.data);
        setFiltered(res.data);
      });

  }, []);

  useEffect(() => {

    const f = results.filter(r =>
      r.iou >= filters.minIoU &&
      r.dice >= filters.minDice &&
      r.urban_growth >= filters.minGrowth &&
      r.urban_growth <= filters.maxGrowth &&
      r.image_id >= filters.minId &&
      r.image_id <= filters.maxId
    );

    setFiltered(f);

  }, [filters, results]);

  const handleChange = (key, value) => {

    setFilters(prev => ({
      ...prev,
      [key]: Number(value)
    }));

  };

  const resetFilters = () => {

    setFilters({
      minIoU: 0,
      minDice: 0,
      minGrowth: 0,
      maxGrowth: 100,
      minId: 0,
      maxId: 100000
    });

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}

      <div className="w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 shadow-xl sticky top-0 h-screen overflow-y-auto">

        <h2 className="text-2xl font-bold mb-6">
          Filters
        </h2>

        <div className="space-y-6">

          {/* Toggle Charts */}

          <ToggleSwitch
            label="Show Charts"
            onToggle={(v)=>setShowCharts(v)}
          />

          {/* IoU */}

          <div>

            <label className="text-sm text-gray-300">
              Min IoU
            </label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={filters.minIoU}
              onChange={(e)=>handleChange("minIoU",e.target.value)}
              className="w-full mt-2"
            />

            <p className="text-indigo-400 text-sm">
              {filters.minIoU.toFixed(2)}
            </p>

          </div>


          {/* Dice */}

          <div>

            <label className="text-sm text-gray-300">
              Min Dice
            </label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={filters.minDice}
              onChange={(e)=>handleChange("minDice",e.target.value)}
              className="w-full mt-2"
            />

            <p className="text-green-400 text-sm">
              {filters.minDice.toFixed(2)}
            </p>

          </div>


          {/* Urban Growth Range */}

          <div>

            <label className="text-sm text-gray-300">
              Urban Growth Range
            </label>

            <input
              type="number"
              value={filters.minGrowth}
              onChange={(e)=>handleChange("minGrowth",e.target.value)}
              className="w-full mt-2 bg-gray-700 rounded p-2"
            />

            <input
              type="number"
              value={filters.maxGrowth}
              onChange={(e)=>handleChange("maxGrowth",e.target.value)}
              className="w-full mt-2 bg-gray-700 rounded p-2"
            />

          </div>


          {/* Image ID */}

          <div>

            <label className="text-sm text-gray-300">
              Image ID Range
            </label>

            <input
              type="number"
              value={filters.minId}
              onChange={(e)=>handleChange("minId",e.target.value)}
              className="w-full mt-2 bg-gray-700 rounded p-2"
            />

            <input
              type="number"
              value={filters.maxId}
              onChange={(e)=>handleChange("maxId",e.target.value)}
              className="w-full mt-2 bg-gray-700 rounded p-2"
            />

          </div>


          {/* Reset */}

          <button
            onClick={resetFilters}
            className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-lg p-3 font-semibold"
          >
            Reset Filters
          </button>

        </div>

      </div>


      {/* MAIN PANEL */}

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6">
          Satellite Change Detection Dashboard
        </h1>


        {/* Stats */}

        <div className="mb-6 flex gap-6">

          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-500 text-sm">Total Images</p>
            <p className="text-2xl font-bold">{results.length}</p>
          </div>

          <div className="bg-indigo-600 text-white shadow rounded-lg p-4">
            <p className="text-sm">Filtered Images</p>
            <p className="text-2xl font-bold">{filtered.length}</p>
          </div>

        </div>


        {/* Charts */}

        {showCharts && (

          <div className="space-y-10 mb-10">

            <Charts data={filtered}/>

            <UrbanGrowthPlots
              data={filtered}
              mode={growthMode}
            />

          </div>

        )}


        {/* Cards */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filtered.map(r => (
            <RecordCard
              key={r.image_id}
              data={r}
            />
          ))}

        </div>

      </div>

    </div>

  );
}