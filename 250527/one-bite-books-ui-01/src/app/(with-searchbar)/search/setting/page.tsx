import React from "react";
import delay from "@/util/delay";

const Page = async () => {
  await delay(2000);
  return <div>settingpage</div>;
};

export default Page;
