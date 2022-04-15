import { Fetch_BANKS, USER_DATA } from "../Types/type";
import env from "../../config";
// *************user details function**************************
export const fetchUserDetails = (token) => (dispatch) => {
  let myHeaders = new Headers();
  // console.log("env.PRESTO_API", env.PRESTO_API);
  // console.log("env.PRESTO_API", env.PRESTO_API);

  myHeaders.append("Authorization", "Bearer " + token);
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${env.PRESTO_API}/api/auth/profile`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("users details", result);
      if (result) {
        dispatch({ type: USER_DATA, payload: result });
        return;
      }
    })
    .catch((error) => {
      // setValidate("unable to process users details");
      console.log("users details error", error);
    });
};

// ************update Avatar******************
export const updateAvatar =
  (
    avatar,
    token,
    setModalMessage,
    setOpenResModal,
    handleRefresh,
    setLoading
  ) =>
  (dispatch) => {
    setLoading(true);
    let myHeaders = new Headers();
    let formdata = new FormData();
    myHeaders.append("Authorization", "Bearer " + token);
    formdata.append("profile_pic", avatar);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${env.PRESTO_API}/api/auth/updatepic`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("reset result", result);
        setLoading(false);
        if (result?.status == 201) {
          setOpenResModal(true);
          setModalMessage({ status: "ok", text: result?.message });
          handleRefresh();
        } else {
          setOpenResModal(true);
          setModalMessage({
            status: "fail",
            text: "unable to process transaction, try again",
          });
          handleRefresh();
        }
      })
      .catch((error) => {
        setLoading(false);
        handleRefresh();
        setOpenResModal(true);
        setModalMessage({
          status: "fail",
          text: "unable to process transaction, try again",
        });
        console.log("error", error);
      });
  };

// ************update profile******************
export const updateProfile =
  (
    firstName,
    lastName,
    phone,
    token,
    setModalMessage,
    setOpenResModal,
    handleRefresh,
    setLoading,
    username
  ) =>
  (dispatch) => {
    setLoading(true);
    let myHeaders = new Headers();
    let formdata = new FormData();
    myHeaders.append("Authorization", "Bearer " + token);
    formdata.append("firstname", firstName);
    formdata.append("lastname", lastName);
    formdata.append("phoneno", phone);
    formdata.append("username", username);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${env.PRESTO_API}/api/auth/updateprofile`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("reset result", result);
        setLoading(false);
        if (result?.status == 201) {
          setOpenResModal(true);
          setModalMessage({ status: "ok", text: result?.message });
          handleRefresh();
        } else {
          setOpenResModal(true);
          setModalMessage({
            status: "fail",
            text: "unable to process transaction, try again",
          });
          handleRefresh();
        }
      })
      .catch((error) => {
        setLoading(false);
        handleRefresh();
        setOpenResModal(true);
        setModalMessage({
          status: "fail",
          text: "unable to process transaction, try again",
        });
        console.log("update profile error", error);
      });
  };

// ************get All Banks****************************
// export const getAllBanks = () => (dispatch) => {
//   let myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X");
//   let requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//   };

//   fetch("https://api.flutterwave.com/v3/banks/NG", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       //   console.log(result);
//       dispatch({ type: Fetch_BANKS, payload: result?.data });
//     })
//     .catch((err) => console.log("getting all banks error", err));
// };

// ************get All Banks****************************
export const getAllBanks = () => (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("api-key", env.FINCRA_API_KEY);
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(env.FINCRA_API_URL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("fincra", result?.data);
      dispatch({ type: Fetch_BANKS, payload: result?.data });
    })
    .catch((err) => console.log("getting all banks error", err));
};
