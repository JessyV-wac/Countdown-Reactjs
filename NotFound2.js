import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);

  const [intervalID, setIntervalID] = useState(null);

  const navigate = useNavigate();
  function tick() {
    setCountdown((c) => c - 1);
  }

  useEffect(() => {
    if (!intervalID) {
      const interval = setInterval(tick, 1000);
      setIntervalID(interval);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [intervalID, tick]);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div>
      not found
      {countdown}
      <button onClick={() => navigate("/sqhusqhjsqhj")}>Navigate</button>
    </div>
  );
};

export default NotFound;
