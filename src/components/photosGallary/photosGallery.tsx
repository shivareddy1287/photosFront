import { useEffect, useState } from "react"
import "./photosGallery.css"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import type { RootState } from "../../redux/store/store"
import { fetchPhotosAction } from "../../redux/slices/photos/photosSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchUsersAction } from "../../redux/slices/users/userSlice"
import ImageLoader from "../../utils/imageLoader"
import NoPhotosIllustration from "../../utils/illustrations/noPhotos"

const PhotosGallery = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const maxDate = dayjs().add(0, "day")
  const dispatch = useAppDispatch()

  const { usersList, loading: userLoading } = useAppSelector(
    (state: RootState) => state.users,
  )
  const { allPhotos, loading } = useAppSelector(
    (state: RootState) => state.photos,
  )

  //fetch post
  useEffect(() => {
    dispatch(fetchPhotosAction())
  }, [dispatch])

  // fetch users
  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  return (
    <div className="ad-cont">
      {/* <Sidebar /> */}
      <div className="db-cont">
        <div className="form">
          {loading || userLoading ? (
            <>
              <ImageLoader />
            </>
          ) : (
            <>
              <div className="db-det-cont">
                <div className="db-det-l-cont">
                  {usersList && usersList[0]?.profilePhoto && (
                    <>
                      <img
                        alt="person"
                        src={`data:image/jpeg;base64,${usersList[0]?.profilePhoto}`}
                      />{" "}
                    </>
                  )}

                  <span>
                    {usersList && (
                      <>
                        {" "}
                        {usersList.length > 0
                          ? `${usersList[0]?.lastName} ${usersList[0]?.firstName}`
                          : "Loading"}
                      </>
                    )}
                  </span>
                </div>
                <div className="db-det-r-cont">
                  <button type="button" className="pn-btn">
                    <ArrowBackIosNewRoundedIcon />
                  </button>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date}
                      format="DD-MMM-YYYY"
                      className="mui-date custom-datepicker" // Add custom class here
                      onChange={date => setDate(date)}
                      maxDate={maxDate}
                    />
                  </LocalizationProvider>
                  <button type="button" className="pn-btn">
                    <ArrowForwardIosRoundedIcon className="pn-btn-icon" />
                  </button>
                </div>
              </div>
              {allPhotos ? (
                <>
                  <div className="db-imgs-cont">
                    {allPhotos?.filter(photo => {
                      // Convert the photo date and the given date to just the date part
                      const photoDate = new Date(photo?.date)
                        .toISOString()
                        .split("T")[0]
                      const selectedDate = date
                        ? date.toDate().toISOString().split("T")[0]
                        : ""

                      return photoDate === selectedDate
                    }).length > 0 ? (
                      allPhotos
                        ?.filter(photo => {
                          const photoDate = new Date(photo?.date)
                            .toISOString()
                            .split("T")[0]
                          const selectedDate = date
                            ? date.toDate().toISOString().split("T")[0]
                            : ""

                          return photoDate === selectedDate
                        })
                        ?.map(photo => (
                          <div key={photo?._id}>
                            <img src={photo?.image} alt="img" />
                          </div>
                        ))
                    ) : (
                      <div className="illu-cont">
                        <NoPhotosIllustration />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotosGallery
