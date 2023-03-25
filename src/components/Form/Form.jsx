import React, { useState, useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send data",
    });
  });

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Enter your data</h3>
      <input
        className={"input"}
        value={country}
        onChange={onChangeCountry}
        type="text"
        placeholder={"Country"}
      />
      <input
        className={"input"}
        value={street}
        onChange={onChangeStreet}
        type="text"
        placeholder={"Street"}
      />
      <select value={subject} onChange={onChangeSubject} className={"select"}>
        <option value={"legal"}>Legal face</option>
        <option value={"physical"}>Physical face</option>
      </select>
    </div>
  );
};

export default Form;
