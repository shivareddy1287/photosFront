import "./App.css"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import AuthPage from "./components/auth/auth"

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import HomePage from "./components/homePage/homePage"
import Dashboard from "./components/admin/dashboard/dashboard"
import CreateLeaders from "./components/admin/createLeaders/createLeaders"
import Leaders from "./components/admin/leaders/leaders"
import UploadPhotos from "./components/admin/uploadPhotos/uploadPhotos"
import EditProfile from "./components/admin/editProfile/editProfile"
import PhotosGallery from "./components/photosGallary/photosGallery"
import DeletePhotos from "./components/admin/dashboardDeletePhotos/dashboardDeletePhotos"
import AddUserBio from "./components/admin/addBio/addbio"
import KnowYourLeader from "./components/admin/knowYourLeader/knowYourLeader"

const App = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <ToastContainer />
      <div>
        <Navbar />
        {/* <ul>
          <li style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
            login
          </li>
          <li onClick={() => navigate("/")}>home</li>
          <li
            onClick={() => {
              sessionStorage.removeItem("token")
              navigate("/login")
            }}
          >
            logout
          </li>
        </ul> */}
      </div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthPage />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<UploadPhotos />} path="/upload-photos" />
        <Route element={<Leaders />} path="/leaders" />
        <Route element={<AddUserBio />} path="/user-bio/:id" />
        <Route element={<KnowYourLeader />} path="/know-your-leader" />
        <Route element={<CreateLeaders />} path="/create-leaders" />
        <Route element={<PhotosGallery />} path="/photos-gallery" />
        <Route element={<DeletePhotos />} path="/delete-photos" />
        <Route element={<EditProfile />} path="/edit-profile/:id" />
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
