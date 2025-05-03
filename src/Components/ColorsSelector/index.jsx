import React from "react";

export default function ColorSelector() {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <div>
          <input name="color" id="test" type="radio" className="hidden peer" />
          <label
            htmlFor="test"
            className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
          ></label>
        </div>
        <div>
          <input name="color" id="test2" type="radio" className="hidden peer" />
          <label
            htmlFor="test2"
            className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
          ></label>
        </div>
        <div>
          <input
            name="color"
            id="test12"
            type="radio"
            className="hidden peer"
          />
          <label
            htmlFor="test12"
            className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
          ></label>
        </div>
        <div>
          <input
            name="color"
            id="test14"
            type="radio"
            className="hidden peer"
          />
          <label
            htmlFor="test14"
            className="relative w-4 p-3 bg-red-400 rounded-full peer-checked:ring-2 peer-checked:ring-green-400 "
          ></label>
        </div>
      </div>
    </div>
  );
}
