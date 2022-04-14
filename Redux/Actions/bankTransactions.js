import { GET_Back_DETAILS, GET_WITHDRAWALS } from "../Types/type";

// **************Add Bank Account Details**************************
export const AddBankAccountDetails =
  (
    token,
    bankcode,
    accountNumber,
    setLoading,
    setModalMessage,
    setOpenModal,
    navigation,
    handleRefresh,
    bankName,
    image
  ) =>
  (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    console.log("imageee", image);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("bank", bankName);
    formdata.append("bankcode", bankcode);
    formdata.append("image", image);
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
        handleRefresh();
        setLoading(false);
        if (result?.status === 201) {
          navigation.navigate("AccountVerScreen", result?.accountname);
        } else {
          // console.log("transaction err ");
          setOpenModal(true);
          setModalMessage({
            status: "fail",
            text: "invalid credentials, try again",
          });
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

// **************fetch user bank Details**************************
export const fetchBankDetails = (token) => (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);
  const config = {
    method: "Get",
    headers: myHeaders,
  };

  fetch("https://api.prestohq.io/api/auth/viewaccount", config)
    .then((response) => response.json())
    .then((result) => {
      //   console.log(result);
      dispatch({ type: GET_Back_DETAILS, payload: result?.bankacounts });
    })
    .catch((error) => console.log(error));
};

// **************withdraw funds**************************
export const requestWithdraw =
  (
    token,
    amount,
    note,
    accountNumber,
    accountName,
    bankName,
    bankCode,
    setLoading,
    setModalMessage,
    setOpenModal,
    handleRefresh,
    handleToast,
    navigation
  ) =>
  (dispatch) => {
    setLoading(true);
    let myHeaders = new Headers();
    console.log("token", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("amount", amount);
    formdata.append("note", note);
    formdata.append("bankcode", bankCode);
    formdata.append("bank", bankName);
    formdata.append("accountname", accountName);
    formdata.append("accountno", accountNumber);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/requestwithdrawal", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("bank result", result?.result);
        setLoading(false);
        if (result?.status === 200) {
          handleRefresh();
          handleToast(result?.message);
          navigation.navigate("ReceiptScreen", { result });
        } else {
          setModalMessage({
            status: "fail",
            text: result?.result || "unable to process transaction",
          });
          setOpenModal(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);

        setModalMessage({
          status: "fail",
          text: "unable to process transaction",
        });
        setOpenModal(true);
      });
  };

// **************fetch user Withdrawals history**************************
export const fetchWithdrawals = (token) => (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);
  const config = {
    method: "Get",
    headers: myHeaders,
  };

  fetch("https://api.prestohq.io/api/selectwithdrawal", config)
    .then((response) => response.json())
    .then((result) => {
      // console.log("GET_WITHDRAWALS", result);
      dispatch({ type: GET_WITHDRAWALS, payload: result?.withdrawals });
    })
    .catch((error) => console.log(error));
};
