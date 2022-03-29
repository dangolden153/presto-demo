export const fetchBankDetails = (token) => (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);
  const config = {
    method: "Get",
    headers: myHeaders,
  };

  fetch("https://api.prestohq.io/api/auth/viewaccount", config)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
