import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newsapi.org/",
  params: {
    apiKey: "e2501b68476f4a55bb3ff83acb657059",
  },
});

const newsNYTApi = axios.create({
  baseURL: "https://api.nytimes.com/",
  params: {
    "api-key": "2TJXVxtjeApRyKtbcwOv8EItUA28OXeT",
  },
});

const newsGuardianApi = axios.create({
  baseURL: "https://content.guardianapis.com/",
  params: {
    "api-key": "d209944d-f089-4956-8d19-0a6506c95080",
  },
});

export { newsApi, newsNYTApi, newsGuardianApi };
