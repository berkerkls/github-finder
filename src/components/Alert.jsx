import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    <div
      className="flex items-start mb-4 spacex-x-2"
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      {alert?.type === "error" && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white">{alert.msg}</span>
          </div>
        </div>
      )}
      {alert?.type === "success" && (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white">{alert.msg}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
