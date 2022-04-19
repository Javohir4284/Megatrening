import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Common = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/ru");
  }, []);
  return <div></div>;
};

export default Common;
