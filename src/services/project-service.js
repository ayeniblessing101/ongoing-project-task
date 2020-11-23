import * as axios from "axios";

const url = "https://244b8df3-7491-4cfd-a48b-267f19446372.mock.pstmn.io/";

const getOngoingProjectsData = async () => {
  try {
    const response = await axios.get(url);
    const ongoingProjectsData = response.data;
    return ongoingProjectsData;
  } catch (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 429:
          throw new Error(
            "Your team plan allows 1000 mock server calls per month. Contact your team Admin to up your limit."
          );
        case 404:
          throw new Error("OOps! That which you seek cannot be found");
        default:
          throw new Error("An error occured. Please try again later");
      }
    }
  }
};

export const data = {
  getOngoingProjectsData,
};
