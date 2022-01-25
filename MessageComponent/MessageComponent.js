import React from "react";
import pics from "../../images/bran.jpg";

function MessageComponent() {
  const personData = [
    {
      img: `(${require("../../images/twitter.png")})`,
      name: "wilson",
      socialMedia: "",
    },

    {
      img: `${require("../../images/bran.jpg")}`,
      name: "wilson",
      socialMedia: "",
    },
    {
      img: `${require("../../images/bran.jpg")}`,
      name: "wilson",
      socialMedia: "",
    },
    {
      img: `${require("../../images/bran.jpg")}`,
      name: "wilson",
      socialMedia: "",
    },
    {
      img: `${require("../../images/bran.jpg")}`,
      name: "wilson",
      socialMedia: "",
    },
  ];

  return (
    <div className="flex justify-between h-full bg-gostWhite items-center relative">
      <div className=" w-2/4 m-2 h-full shadow-lg bg-sidebarTxt p-4">
        <h2 className="font-semibold text-lg mb-2">Messages</h2>
        <input
          type="text"
          placeholder="Search for people"
          className="border border-silver py-2 px-4 w-full outline-none "
        />
        {personData.map((person) => (
          <div className="flex items-center justify-between">
            <div
              className="flex items-center my-4"
              key={person.id}
              person={person}
            >
              <img
                src={pics}
                className="h-10 w-10 mr-3 rounded-full"
                alt="..."
              />
              <div className="flex-col items-start">
                <p className="text-sm font-semibold">{person.name}</p>
                <p className="text-xs text-textColor">we are om track</p>
              </div>
            </div>
            <p className="text-xs text-textColor">14, October</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center flex-1 h-full m-2 shadow-lg">
        <p className="text-xl font-semibold ">
          You don't have a message selected
        </p>
        <p className="text-xs my-4 text-textColor">
          choose an existing message to continue a conversation
        </p>
        <button className="py-2 px-4 text-sm mt-4 font-semibold  bg-darkOrange">
          New message
        </button>
      </div>
    </div>
  );
}

export default MessageComponent;
