// ************update password******************
export const updatePassword =
  (email, setModalMessage, setOpenResModal, setLoading) => (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    let formdata = new FormData();

    formdata.append("email", email);

    let requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/password/email", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        // console.log("reset result", result?.msg);
        if (result) {
          setModalMessage({ status: "ok", text: result?.msg });
          setOpenResModal(true);
          return;
        }

        //else {
        //   setOpenResModal(true);
        //   setModalMessage("unable to process transaction, try again");
        // }
      })
      .catch((error) => {
        setLoading(false);
        setOpenResModal(true);
        setModalMessage({
          status: "ok",
          text: "unable to update password, try again",
        });

        console.log("error", error);
      });
  };

// ************validate pin******************
export const validateCurrentPin =
  (
    pin,
    token,
    setModalMessage,
    setOpenModal,
    setLoading,
    navigation,
    navigate,
    withdraw
  ) =>
  (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    // console.log("update password", token);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();

    formdata.append("pin", pin);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/validatepin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        // console.log("reset result", result);
        if (result?.status === "200") {
          if (withdraw) {
            console.log("Withdraw Approved");
            return;
          }
          if (navigate) {
            navigation.navigate(navigate, pin);
            return;
          }
        } else {
          setModalMessage({ status: "fail", text: result?.message });
          setOpenModal(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setOpenModal(true);
        setModalMessage({
          status: "fail",
          text: "Ops something went wrong!, please try again.",
        });
        console.log("error", error);
      });
  };

// ************reset pin******************
export const resetPin =
  (
    code,
    oldPin,
    token,
    setModalMessage,
    setOpenModal,
    setLoading,
    navigation
  ) =>
  (dispatch) => {
    setLoading(true);

    let myHeaders = new Headers();
    console.log("oldPin", oldPin);
    console.log("new pin", code);

    myHeaders.append("Authorization", "Bearer " + token);
    let formdata = new FormData();

    formdata.append("oldpin", oldPin);
    formdata.append("pin", code);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.prestohq.io/api/auth/resetpin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        // console.log("reset result", result);
        if (result?.status === "201") {
          setOpenModal(true);
          setModalMessage({ status: "ok", text: result?.message });
          navigation.navigate("ButtomTab");
        } else {
          setOpenModal(true);
          setModalMessage({
            status: "fail",
            text: result?.msg,
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        setOpenResModal(true);
        setModalMessage({
          status: "fail",
          text: "unable to update password, try again",
        });
        console.log("error", error);
      });
  };
