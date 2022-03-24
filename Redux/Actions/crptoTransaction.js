import {
  GET_TRANSACTION,
  BTC_TRANSACTION,
  USDT_TRANSACTION,
  CARD_RATE,
  CRPTO_RATE,
  USDT_ADD,
  BTC_ADD,
} from "../Types/type";

// ***************sell btc********************
export const handleSellBtc =
  (
    image,
    amount,
    token,
    setModalMessage,
    setOpenResModal,
    setLoading,
    setImage
  ) =>
  (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    // console.log("sell btc token", token);

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
          setImage("");
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
        setImage("");
        setLoading(false);
        setOpenResModal(true);
        setModalMessage({
          status: "fail",
          text: "unable to process transaction, try again",
        });
        console.log("error", error);
      });
  };

// ***************sell usdt********************
export const handleSellUsdt =
  (
    image,
    amount,
    token,
    setModalMessage,
    setOpenResModal,
    setLoading,
    setImage
  ) =>
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
          setImage("");
        } else {
          setOpenResModal(true);
          setModalMessage({
            status: "fail",
            text: "unable to process transaction, try again",
          });
          setImage("");
        }
      })
      .catch((error) => {
        setImage("");
        setLoading(false);
        setOpenResModal(true);
        setModalMessage({
          status: "fail",
          text: "unable to process transaction, try again",
        });
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
      dispatch({ type: GET_TRANSACTION, payload: result?.cardtransactions });
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
      dispatch({ type: BTC_TRANSACTION, payload: result?.btctransactions });
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
      dispatch({ type: USDT_TRANSACTION, payload: result?.usdttransactions });
    })
    .catch((error) => {
      // setLoading(false);
      setModalMessage("unable to process transaction");
      console.log("error", error);
    });
};

// ***************get card details*****************************
export const fetchCardRate = (token, setModalMessage) => (dispatch) => {
  let myHeaders = new Headers();

  myHeaders.append("Authorization", "Bearer " + token);

  let requestOptions = {
    method: "GET",
    // headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://prestobackend.herokuapp.com/api/card`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get card rate", result);
      dispatch({ type: CARD_RATE, payload: result });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// ***************get crypto rate*****************************
export const fetchCyptoRate = () => (dispatch) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://api.prestohq.io/api/cryptorates`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get cryto rate", result?.cryptorates);
      dispatch({ type: CRPTO_RATE, payload: result?.cryptorates });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// ***************get usdt wallet address*****************************
export const fetchUSDTAddress = () => (dispatch) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`https://api.prestohq.io/api/usdtwallet`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get cryto rate", result?.cryptorates);
      dispatch({ type: USDT_ADD, payload: result?.addresses });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// ***************get btc wallet address*****************************
export const fetchUBTCAddress = () => (dispatch) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://api.prestohq.io/api/btcwallet`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log("get cryto rate", result?.cryptorates);
      dispatch({ type: BTC_ADD, payload: result?.addresses });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

// ***************post sellGiftcard*****************************
export const sellGiftcard =
  (
    token,
    country,
    amount,
    value,
    tpe,
    image,
    receipt,
    photoData,
    setLoading,
    setModalMessage,
    setOpenModal,
    image_big,
    image_small
  ) =>
  (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    console.log("photoData[1] :>> ", photoData[1]);
    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();
    formdata.append("country", country);
    formdata.append("amount", amount);
    formdata.append("value", value);
    formdata.append("type", tpe);
    formdata.append("image", image_big);
    formdata.append("image_small", image_small);
    // {
    //   image &&
    //     formdata.append("image", {
    //       name: "dan",
    //       type: "image/jpeg",
    //       uri: image,
    //     });
    // }
    {
      receipt &&
        formdata.append("receipt", {
          name: "dan",
          type: "image/jpeg",
          uri: receipt,
        });
    }
    {
      photoData[0] &&
        formdata.append("picture_1", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[0],
        });
    }
    {
      photoData[1] &&
        formdata.append("picture_2", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[1],
        });
    }
    {
      photoData[2] &&
        formdata.append("picture_3", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[2],
        });
    }
    {
      photoData[3] &&
        formdata.append("picture_4", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[3],
        });
    }
    {
      photoData[4] &&
        formdata.append("picture_5", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[4],
        });
    }
    {
      photoData[5] &&
        formdata.append("picture_6", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[5],
        });
    }
    {
      photoData[6] &&
        formdata.append("picture_7", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[6],
        });
    }
    {
      photoData[7] &&
        formdata.append("picture_8", {
          name: "dan",
          type: "image/jpeg",
          uri: photoData[7],
        });
    }
    // {
    //   photoData[6] &&
    //     formdata.append("receipt", {
    //       name: "dan",
    //       type: "image/jpeg",
    //       uri: photoData[6],
    //     });
    // }
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/cardtransaction", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log("card result", result);
        if (result?.result === "Transaction Sent") {
          setModalMessage({ status: "ok", text: result?.result });
          setOpenModal(true);
        } else {
          setOpenModal(true);
          setModalMessage({
            status: "fail",
            text: "unable to process transaction, try again",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setOpenModal(true);
        setModalMessage({
          status: "fail",
          text: "unable to process transaction, try again",
        });
        console.log("card error", error);
      });
  };
