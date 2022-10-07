import React, { useState } from "react";

const useAccount = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  return {
    fullname,
    password,
    companyName,
    email,
    setFullname,
    setPassword,
    setCompanyName,
    setEmail,
  };
};

export default useAccount;
