import React from "react";
import {useRouter} from "next/router";

// for dynamic routing
const DetailPage = () => {
  const router = useRouter(); //grab the current path, behaves similar to useHistory
  console.log(router.query.id); //grabs the dynamic segment id

  return <div>This page has a dynamically generated Route</div>;
};

export default DetailPage;
