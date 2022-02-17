import { GET_TRANSACTION } from "../Types/type";

// ***************sell btc********************
export const handleSellBtc =
  (image, amount, token, setModalMessage, setOpenResModal, setLoading) =>
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
          setModalMessage(result?.result);
          setOpenResModal(true);
        } else {
          setModalMessage("unable to process transaction");
        }
        setOpenResModal(true);
        console.log("card result", result);
      })
      .catch((error) => {
        setLoading(false);
        setOpenResModal(true);
        setModalMessage("unable to process transaction");
        console.log("error", error);
      });
  };



  // ***************sell usdt********************
export const handleSellUsdt =
(image, amount, token, setModalMessage, setOpenResModal, setLoading) =>
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
        setModalMessage(result?.result);
        setOpenResModal(true);
      } else {
        setOpenResModal(true);
        setModalMessage("unable to process transaction, try again");
      }
      
    })
    .catch((error) => {
      setLoading(false);
      setOpenResModal(true);
      setModalMessage("unable to process transaction, try again");
      console.log("error", error);
    });
};





  // ***************get card*****************************
  export const fetchCardTransactions = (token,setModalMessage) => (dispatch) => {
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
        console.log("get card transaction", result?.cardtransactions);
        dispatch({type: GET_TRANSACTION, payload: result?.cardtransactions})
      })
      .catch((error) => {
        // setLoading(false);
        setModalMessage("unable to process transaction");
        console.log("error", error);
      });
  };
