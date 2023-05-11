"useClient";
import React, { useEffect, useState } from "react";
import { useLoggedContext } from "@/context/context";

const ConditionalRenderLogged = ({
  childrenOnline,
  childrenOffline,
  className,
}) => {
  const { logged, setLogged } = useLoggedContext();
  const [sessionLogged, setSessionLogged] = useState();

  useEffect(() => {
    setSessionLogged(logged);
  }, [logged]);

  return (
    <div className={className}>
      {sessionLogged ? childrenOnline : childrenOffline}
    </div>
  );
};

export default ConditionalRenderLogged;
