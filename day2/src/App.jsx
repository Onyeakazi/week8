import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css"
import { Route, Routes } from "react-router-dom";

function App() {
    
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="p-8">
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />

                <Route path="/products" element={ <ProtectedRoute><ProductsPage/></ProtectedRoute> } />
                <Route path="/products/:id" element={ <ProtectedRoute><ProductDetailPage/></ProtectedRoute> } />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>

    </div>
  )
}

export default App