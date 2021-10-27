import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update_user } from "../redux/Apicalls";

export function UpdateUser() {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(null);

  const get_refresh = () => {
    setRefresh(() =>
      localStorage.getItem("refresh") ? localStorage.getItem("refresh") : null
    );
  };

  useEffect(() => {
    get_refresh();
    let fourMinutes = 1000 * 60 * 1;

    let interval = setInterval(() => {
      if (refresh) {
        dispatch(update_user());
      }
    }, fourMinutes);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [refresh]);
}

export default UpdateUser;
