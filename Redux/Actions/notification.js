import { GET_NOTIFICATION } from "../Types/type";

// ***************post notification********************
export const handleNotification = (token, message, title) => (dispatch) => {
  setLoading(true);

  let myHeaders = new Headers();

  myHeaders.append("Authorization", "Bearer " + token);
  let formdata = new FormData();

  formdata.append("message", message);
  formdata.append("title", title);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://api.prestohq.io/api/notification", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("notification result", result);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// ***************get notification********************
export const getNotification = (token) => (dispatch) => {
  let myHeaders = new Headers();
  //   console.log("token :>> ", token);
  myHeaders.append("Authorization", "Bearer " + token);
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.prestohq.io/api/notification", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      //   console.log("notification result", result?.notifications);
      dispatch({ type: GET_NOTIFICATION, payload: result?.notifications });
    })
    .catch((error) => {
      console.log("error", error);
    });
};
