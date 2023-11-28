import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkerPanel from "./pages/WorkerPanel";
import RegisterWork from "./pages/RegisterWork";
import LoginForm from "./components/LoginForm";
import UserWork from "./pages/UserWork";
import MonthlyWorkerPayouts from "./pages/MonthlyWorkerPayouts";
import MachineryUsage from "./pages/MachineryUsage";
import Private from "./components/Private/Private";
import AdminPrivate from "./components/Private/AdminPrivate";
import AdminPanel from "./pages/AdminPanel";
import BasicUserInfo from "./pages/BasicUserInfo";
import WorkerDetails from "./pages/WorkerDetails";
import WorkersMonthlySalary from "./pages/WokrersMonthlySalary";
import WorkersMachineryUsage from "./pages/WorkersMachineryUsage";
import WorkInfo from "./pages/WorkInfo";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>

        <Route path="" element={<Private />}>
          <Route
            path="/machinery-usage"
            element={<MachineryUsage></MachineryUsage>}
          ></Route>
          <Route
            path="/monthly-payouts"
            element={<MonthlyWorkerPayouts></MonthlyWorkerPayouts>}
          ></Route>
          <Route path="/work-days" element={<UserWork></UserWork>}></Route>
          <Route path="/newday" element={<RegisterWork></RegisterWork>}></Route>
          <Route path="/worker" element={<WorkerPanel></WorkerPanel>}></Route>
          <Route path="" element={<AdminPrivate></AdminPrivate>}>
            <Route
              path="/admin-panel"
              element={<AdminPanel></AdminPanel>}
            ></Route>
            <Route
              path="/basic-user-info"
              element={<BasicUserInfo></BasicUserInfo>}
            ></Route>
            <Route
              path="/worker/:id"
              element={<WorkerDetails></WorkerDetails>}
            ></Route>
            <Route
              path="/workers-monthly-salary"
              element={<WorkersMonthlySalary />}
            ></Route>
            <Route
              path="/workers-machinery-usage"
              element={<WorkersMachineryUsage />}
            ></Route>
            <Route path="/work-info" element={<WorkInfo />}></Route>
            <Route path="/new-worker" element={<RegisterUser />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
