// ************update Avatar******************
export const updateAvatar =
    (avatar, token, setModalMessage, setOpenResModal, handleRefresh, setLoading) => (dispatch) => {
        setLoading(true)
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
                setLoading(false)
                if (result?.status == 201) {
                    setOpenResModal(true);
                    setModalMessage({ status: "ok", text: result?.message });
                    handleRefresh()

                } else {
                    setOpenResModal(true)
                    setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
                    handleRefresh()
                }

            })
            .catch((error) => {
                setLoading(false)
                handleRefresh()
                setOpenResModal(true);
                setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
                console.log("error", error);
            });
    };


// ************update profile******************
export const updateProfile =
    (firstName, lastName, email, phone, token, setModalMessage, setOpenResModal, handleRefresh, setLoading) => (dispatch) => {
        setLoading(true)
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
                setLoading(false)
                if (result?.status == 201) {
                    setOpenResModal(true);
                    setModalMessage({ status: "ok", text: result?.message });
                    handleRefresh()

                } else {
                    setOpenResModal(true)
                    setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
                    handleRefresh()
                }

            })
            .catch((error) => {
                setLoading(false)
                handleRefresh()
                setOpenResModal(true);
                setModalMessage({ status: "fail", text: "unable to process transaction, try again" });
                console.log("error", error);
            });
    };