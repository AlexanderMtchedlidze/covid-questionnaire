import axios from "axios";

import config from "./config.js";

import endpoints from "./endpoints.js";

import formatDate from "../../utilities/formatDate.js";

const B = new URL(config.base_url);

const fetchUrl = new URL(endpoints.api_endpoint + endpoints.create_endpoint, B);

const sendAllGatheredData = async () => {
  let antibodies = {};

  if (localStorage.getItem("number")) {
    antibodies.number = +localStorage.getItem("number");
  }
  if (localStorage.getItem("test_date")) {
    antibodies.test_date = formatDate(localStorage.getItem("test_date"));
  }
  let object = {
    first_name: localStorage.getItem("first_name"),
    last_name: localStorage.getItem("last_name"),
    email: localStorage.getItem("email"),
    had_covid: localStorage.getItem("had_covid"),
    had_vaccine: JSON.parse(localStorage.getItem("had_vaccine")),
    non_formal_meetings: localStorage.getItem("non_formal_meetings"),
    number_of_days_from_office: localStorage.getItem(
      "number_of_days_from_office"
    ),
  };
  if (localStorage.getItem("had_antibody_test")) {
    object.had_antibody_test = JSON.parse(
      localStorage.getItem("had_antibody_test")
    );
  }
  if (antibodies) {
    object.antibodies = antibodies;
  }
  if (localStorage.getItem("vaccination_stage")) {
    object.vaccination_stage = localStorage.getItem("vaccination_stage");
  }
  if (localStorage.getItem("covid_sickness_date")) {
    object.covid_sickness_date = formatDate(
      localStorage.getItem("covid_sickness_date")
    );
  }
  if (localStorage.getItem("i_am_waiting")) {
    object.i_am_waiting = localStorage.getItem("i_am_waiting");
  }
  if (localStorage.getItem("what_about_meetings_in_live")) {
    object.what_about_meetings_in_live = localStorage.getItem(
      "what_about_meetings_in_live"
    );
  }
  if (localStorage.getItem("tell_us_your_opinion_about_us")) {
    object.tell_us_your_opinion_about_us = localStorage.getItem(
      "tell_us_your_opinion_about_us"
    );
  }
  try {
    const response = await axios.post(fetchUrl, object);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default sendAllGatheredData;
