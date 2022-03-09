import { GET_TRANSACTION, BTC_TRANSACTION, USDT_TRANSACTION } from "../Types/type";

// ***************sell btc********************
export const handleSellBtc =
  (image, amount, token, setModalMessage, setOpenResModal, setLoading, setImage) =>
    (dispatch) => {
      setLoading(true);

      let myHeaders = new Headers();
      console.log("sell btc token", token);

      myHeaders.append("Authorization", "Bearer " + token);
      let formdata = new FormData();

      formdata.append("proof", {
        name: "dan",
        type: "image/jpeg",
        uri: image,
      });
      formdata.append("amount", amount);

      // formdata.append("receipt", receipt);

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("https://api.prestohq.io/api/btctransaction", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setLoading(false);
          console.log("card result", result);
          if (result?.result === "Transaction Sent") {
            setImage("")
            setOpenResModal(true);
            setModalMessage({ status: "ok", text: result?.result });
          }
          //  else {
          //   setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
          //   setOpenResModal(true)
          // }
          // setOpenResModal(true);
          // console.log("card result", result);
        })
        .catch((error) => {
          setImage("")
          setLoading(false);
          setOpenResModal(true);
          setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
          console.log("error", error);
        });
    };



// ***************sell usdt********************
export const handleSellUsdt =
  (image, amount, token, setModalMessage, setOpenResModal, setLoading, setImage) =>
    (dispatch) => {
      setLoading(true);

      let myHeaders = new Headers();
      console.log("sell btc token", token);

      myHeaders.append("Authorization", "Bearer " + token);
      let formdata = new FormData();

      formdata.append("proof", {
        name: "dan",
        type: "image/jpeg",
        uri: image,
      });
      formdata.append("amount", amount);

      // formdata.append("receipt", receipt);

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("https://api.prestohq.io/api/usdttransaction", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setLoading(false);
          console.log("usdt result", result);
          if (result?.result === "Transaction Sent") {
            setModalMessage({ status: "ok", text: result?.result });
            setOpenResModal(true);
            setImage("")
          } else {
            setOpenResModal(true);
            setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
            setImage("")

          }

        })
        .catch((error) => {
          setImage("")
          setLoading(false);
          setOpenResModal(true);
          setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
          console.log("error", error);
        });
    };





// ***************get card*****************************
export const fetchCardTransactions = (token, setModalMessage) => (dispatch) => {
  // setLoading(true);
  let myHeaders = new Headers();
  // console.log("token", token);

  myHeaders.append("Authorization", "Bearer " + token);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://api.prestohq.io/api/selectcardtransaction`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get card transaction", result?.cardtransactions);
      dispatch({ type: GET_TRANSACTION, payload: result?.cardtransactions })
    })
    .catch((error) => {
      // setLoading(false);
      setModalMessage("unable to process transaction");
      console.log("error", error);
    });
};

// ***************BTC card*****************************
export const fetchBTCTransactions = (token, setModalMessage) => (dispatch) => {
  // setLoading(true);
  let myHeaders = new Headers();
  // console.log("token", token);

  myHeaders.append("Authorization", "Bearer " + token);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://api.prestohq.io/api/selectbtctransaction/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get BTC_TRANSACTION", typeof result ?.btctransactions ?.length);
      dispatch({ type: BTC_TRANSACTION, payload: result?.btctransactions })
    })
    .catch((error) => {
      // setLoading(false);
      setModalMessage("unable to process transaction");
      console.log("error", error);
    });
};


// ***************USDT card*****************************
export const fetchUSDTTransactions = (token, setModalMessage) => (dispatch) => {
  // setLoading(true);
  let myHeaders = new Headers();
  // console.log("token", token);

  myHeaders.append("Authorization", "Bearer " + token);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://api.prestohq.io/api/selectusdttransaction/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get card transaction", result?.cardtransactions);
      dispatch({ type: USDT_TRANSACTION, payload: result?.usdttransactions })
    })
    .catch((error) => {
      // setLoading(false);
      setModalMessage("unable to process transaction");
      console.log("error", error);
    });
};