import "./App.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import AuthPage from "./components/auth/auth"
//

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import HomePage from "./components/homePage/homePage"
import Dashboard from "./components/admin/dashboard/dashboard"
import UploadPhotos from "./components/admin/uploadPhotos/uploadPhotos"
import EditProfile from "./components/admin/editProfile/editProfile"
import PhotosGallery from "./components/photosGallary/photosGallery"
import DeletePhotos from "./components/admin/dashboardDeletePhotos/dashboardDeletePhotos"
import AddUserBio from "./components/admin/addBio/addbio"
import KnowYourLeader from "./components/admin/knowYourLeader/knowYourLeader"
import Error404 from "./components/404Error/404Error"

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthPage />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<UploadPhotos />} path="/upload-photos" />
        <Route element={<AddUserBio />} path="/user-bio/:id" />
        <Route element={<KnowYourLeader />} path="/know-your-leader" />
        <Route element={<PhotosGallery />} path="/photos-gallery" />
        <Route element={<DeletePhotos />} path="/delete-photos" />
        <Route element={<EditProfile />} path="/edit-profile/:id" />
        <Route element={<Error404 />} path="/*" />
      </Routes>
    </div>
  )
}

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root
