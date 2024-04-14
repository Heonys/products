import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
