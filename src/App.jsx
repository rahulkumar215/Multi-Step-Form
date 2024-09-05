import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import PersonalInfo from "./components/PersonalInfo";
import SubscriptionPlans from "./components/SubscriptionPlans";
import AddOns from "./components/AddOns";
import FinishUp from "./components/FinishUp";
import { FormProvider } from "./context/FormContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="personal-info" replace />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="subscription-plans" element={<SubscriptionPlans />} />
            <Route path="add-ons" element={<AddOns />} />
            <Route path="finish-up" element={<FinishUp />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
