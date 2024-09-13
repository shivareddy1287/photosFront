// import "./App.css"
// import { Counter } from "./features/counter/Counter"
// import Gallery from "./features/gallery/gallery"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

// import AuthPage from "./components/auth/auth"
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   useNavigate,
//   useNavigation,
// } from "react-router-dom"

// const App = () => {
//   const navigate = useNavigate()
//   return (
//     <div className="App">
//       <div>
//         <ul>
//           <li onClick={() => navigate("/login")}>login</li>
//         </ul>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<AuthPage />} path="/login" />
//         </Routes>
//       </BrowserRouter>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Gallery />
//         <AuthPage />
//         <Counter />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <Quotes />
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://reselect.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Reselect
//           </a>
//         </span>
//       </header> */}
//     </div>
//   )
// }

// export default App
import "./App.css"

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
