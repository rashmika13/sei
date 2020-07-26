import React, { useState } from "react";
import Battery from "../Battery/Battery";
import { register, unregister } from "../../utils/battery";
import { useEffect } from "react";

function BatteryHookContainer() {
  // const arr = useState(0.55);
  // const level = arr[0];
  // const setlevel = arr[1];

  const [batteryData, setBatteryData] = useState({
    level: 0.55,
    charging: true,
  });

  const updateBattery = (batteryData) => {
    setBatteryData(batteryData);
  };

  useEffect(() => {
    register(updateBattery);
    return () => {
      unregister(updateBattery);
    };
  }, []);
  return <Battery level={batteryData.level} charging={batteryData.charging} />;
}

export default BatteryHookContainer;
