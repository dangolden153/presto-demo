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
