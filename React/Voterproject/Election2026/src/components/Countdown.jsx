import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Countdown = ({ passvote }) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const navigate = useNavigate();

  useEffect(() => {
    if (passvote !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [passvote]);

  useEffect(() => {
    if (timeLeft <= 0 && passvote === null) {
      alert("⏰ Time Up! Redirecting to login...");
      navigate("/login");
    }
  }, [timeLeft, passvote, navigate]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-red-500 font-bold">
      ⏳ Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Countdown;