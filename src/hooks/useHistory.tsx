import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useHistory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = () => {
      navigate(-1);
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
};

export default useHistory;
