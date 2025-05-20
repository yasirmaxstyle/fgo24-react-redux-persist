import { Outlet, Route, Routes } from "react-router"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default Router