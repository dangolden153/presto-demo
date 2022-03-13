import { Fetch_BANKS } from "../Types/type";

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

    fetch("https://api.prestohq.io/api/auth/updatepic", requestOptions)
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
    email,
    phone,
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
    formdata.append("firstname", firstName);
    formdata.append("lastname", lastName);
    formdata.append("email", email);
    formdata.append("phoneno", phone);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/updateprofile", requestOptions)
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

// ************get All Banks****************************
export const getAllBanks = () => (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X");
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch("https://api.flutterwave.com/v3/banks/NG", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      //   console.log(result);
      dispatch({ type: Fetch_BANKS, payload: result?.data });
    })
    .catch((err) => console.log("getting all banks error", err));
};

// **************Add Bank Account Details**************************
export const AddBankAccountDetails =
  (
    token,
    bank,
    accountNumber,
    setLoading,
    setModalMessage,
    setOpenModal,
    navigation
  ) =>
  (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    // console.log("token", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("bank", bank);
    // formdata.append("accountname", accountName);
    formdata.append("accountno", accountNumber);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/updateaccount", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("bank result", result);

        setLoading(false);
        if (result?.status === 201) {
          navigation.navigate("AccountVerScreen", result?.accountname);
        } else {
          console.log("transaction err ");
        }
      })
      .catch((error) => {
        setLoading(false);
        setOpenModal(true);
        setModalMessage({
          status: "fail",
          text: "invalid credentials, try again",
        });
        console.log("transaction error ", error);
      });
  };
