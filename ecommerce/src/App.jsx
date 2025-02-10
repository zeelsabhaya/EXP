import { Route, Routes } from "react-router"
import Home from "./Component/Home"
import Header from "./Component/Header"
import AddToCard from "./Component/Add-To-Card"
import Login from "./Component/Login"
import View from "./Component/View"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/addToCard/:id" element={<AddToCard />} />
      </Routes>
    </>
  )
}

export default App
