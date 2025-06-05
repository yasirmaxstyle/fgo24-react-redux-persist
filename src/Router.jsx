import { Outlet, Route, Routes } from "react-router"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./redux/store"

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  )
}

export default Router