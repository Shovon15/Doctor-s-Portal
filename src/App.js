import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 dark:text-white ">
            <div className="max-w-[1440px] mx-auto ">
                <RouterProvider router={router}></RouterProvider>
                <Toaster />
            </div>
        </div>
    );
}

export default App;

//
//
//
//
