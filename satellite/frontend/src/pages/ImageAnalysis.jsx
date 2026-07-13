import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Charts from "../components/Charts";

export default function ImageAnalysis() {

  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/results")
      .then(res => {

        setData(res.data);

        const selected =
          res.data.find(r => r.image_id == id);

        setRecord(selected);

      });

  }, [id]);

  if (!record) return <div className="p-10">Loading...</div>;

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Image {record.image_id} Analysis
      </h1>


      {/* METRICS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-lg text-center shadow">
          <p className="text-gray-500">IoU</p>
          <p className="text-3xl font-bold text-indigo-600">
            {(Number(record.iou) || 0).toFixed(3)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg text-center shadow">
          <p className="text-gray-500">Dice</p>
          <p className="text-3xl font-bold text-green-600">
            {(Number(record.dice) || 0).toFixed(3)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg text-center shadow">
          <p className="text-gray-500">Urban Growth</p>
          <p className="text-3xl font-bold text-red-500">
            {(Number(record.urban_growth) || 0).toFixed(4)}
          </p>
        </div>

      </div>


      {/* IMAGE COMPARISON */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <img
          src={`/project_images/before_images/before_${record.image_id}.png`}
          className="rounded-lg shadow"
        />

        <img
          src={`/project_images/after_images/after_${record.image_id}.png`}
          className="rounded-lg shadow"
        />

        <img
          src={`/project_images/dashboard_outputs/change_overlay_${record.image_id}.png`}
          className="rounded-lg shadow"
        />

      </div>


      {/* CHARTS */}

      <Charts data={data} />

    </div>

  );
}