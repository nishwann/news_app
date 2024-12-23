import {
  newsApi,
  newsNYTApi,
  newsGuardianApi,
} from "./apiConfig";
import { API_ENDPOINTS } from "../constants/apiConstants";

export const getNewsApiData = async (qParams = {}) => {
  try {
    const response = await newsApi.get(
      API_ENDPOINTS.NEWS_ORG.getAllNews,
      {
        params: qParams,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};

export const getNYNewsApiData = async (qParams = {}) => {
  try {
    const response = await newsNYTApi.get(API_ENDPOINTS.NY_NEWS.news, {
      params: qParams,
    });
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};

export const getTopHeadlines = async (qParams = {}) => {
  try {
    const response = await newsApi.get(
      API_ENDPOINTS.NEWS_ORG.topHeadlines,
      {
        params: qParams,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};

export const getGuardianApiData = async (qParams = {}) => {
  try {
    const response = await newsGuardianApi.get("search", {
      params: qParams,
    });
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};
