import React from 'react'

const VehiclePanel = (probs) => {
  return (
    <div>
      <h5
        onClick={() => {
          probs.setVehiclePanel(false);
        }}
        className="p-1 text-center absolute w-[93%] top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          probs.setConfirmRidePanel(true);
          // probs.setVehiclePanel(false);
        }}
        className="flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt=""
        ></img>
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Afforadable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          probs.setConfirmRidePanel(true);
          // probs.setVehiclePanel(false);
        }}
        className="flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        ></img>
        <div className="-ml-5 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Afforadable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65</h2>
      </div>
      <div
        onClick={() => {
          probs.setConfirmRidePanel(true);
          // probs.setVehiclePanel(false);
        }}
        className="flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        ></img>
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>2
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Afforadable, Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.86</h2>
      </div>
    </div>
  );
}

export default VehiclePanel
