import { useNavigate } from "react-router-dom";

export default function RecordCard({ data }) {

  const navigate = useNavigate();

  if (!data) return null;

  return (
    <div
      onClick={() => navigate(`/analysis/${data.image_id}`)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
    >

      {/* Images */}
      <div className="grid grid-cols-3">

        <img
          src={`/project_images/before_images/before_${data.image_id}.png`}
          className="h-32 w-full object-cover"
        />

        <img
          src={`/project_images/after_images/after_${data.image_id}.png`}
          className="h-32 w-full object-cover"
        />

        <img
          src={`/project_images/dashboard_outputs/change_overlay_${data.image_id}.png`}
          className="h-32 w-full object-cover"
        />

      </div>

      {/* Metrics */}
      <div className="p-4">

        <h3 className="font-semibold text-lg mb-2">
          Image {data.image_id}
        </h3>

        <div className="grid grid-cols-3 text-center text-sm">

          <div>
            <p className="text-gray-500">IoU</p>
            <p className="font-bold text-indigo-600">
              {(Number(data.iou) || 0).toFixed(3)}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Dice</p>
            <p className="font-bold text-green-600">
              {(Number(data.dice) || 0).toFixed(3)}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Growth</p>
            <p className="font-bold text-red-500">
              {(Number(data.urban_growth) || 0).toFixed(4)}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}