import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./components/container/FormContainer";
//loader('json-comments'); /*if */
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;