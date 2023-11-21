import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { AuthContextProvider } from "./context/authcontext";
import Login from "./pages/login";
import Account from "./pages/account";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/protectedRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} /> 
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
