import * as axios from "axios";

const url = "https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/";
// const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const getOngoingProjectsData = async () => {
  try {
    const response = await axios.get(url);
    const ongoingProjectsData = response.data;
    return ongoingProjectsData;
  } catch (error) {
    if (error && error.response) {
      throw new Error("An error occured. Please try again later");
    }
  }
};

export const data = {
  getOngoingProjectsData,
};
