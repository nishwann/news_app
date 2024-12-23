import {
  getGuardianApiData,
  getNewsApiData,
  getNYNewsApiData,
  getTopHeadlines,
} from "./apiCall";

const formatNewsOrgData = (data) => {
  if (data?.status != "ok") return [];
  const newsOrg = data?.articles?.map((news) => {
    return {
      author: news.author,
      source: news.source?.name,
      title: news.title,
      description: news.description,
      redirectionUrl: news.url,
      imageUrl: news.urlToImage,
      publishedDate: news.publishedAt,
    };
  });
  return newsOrg.filter((news) => {
    return (
      news.author !== "[Removed]" &&
      news.title !== "[Removed]" &&
      news.description !== "[Removed]" &&
      news.redirectionUrl !== "[Removed]" &&
      news.imageUrl !== "[Removed]" &&
      news.source !== "[Removed]"
    );
  });
};

const formatGuardianData = (data) => {
  if (data?.response?.status != "ok") return [];
  const newsGuardian = data.response?.results?.map((news) => {
    return {
      source: news.sectionId,
      title: news.webTitle,
      description: news.description,
      redirectionUrl: news.webUrl,
      imageUrl:
        "https://media.wired.com/photos/673e7ec57cd717917da7c18c/191:100/w_1280,c_limit/Politics_newsletter_influencers_traditional_media.jpg",
      publishedDate: news.webPublicationDate,
    };
  });
  return newsGuardian;
};

const formatNewYorkTimesData = (data) => {
  if (data?.status != "OK") return [];
  const newsNewYorkTimes = data?.response?.docs?.map((news) => {
    return {
      source: news.source,
      title: news.abstract,
      description: news.lead_paragraph,
      redirectionUrl: news.web_url,
      imageUrl: "https://gizmodo.com/app/uploads/2024/12/nilay-patel-2024.jpg",
      publishedDate: news.webPublicationDate,
    };
  });

  return newsNewYorkTimes;
};

export const getAllNews = async (searchTerm, page, pageSize) => {
  const resultData = [];
  const [newsOrgData, newsGuardianData, newsNewYorkTimesData] =
    await Promise.all([
      getNewsApiData({ q: searchTerm, page, pageSize }),
      getNYNewsApiData({ q: searchTerm, page, pageSize }),
      getGuardianApiData({ q: searchTerm, page, pageSize }),
    ]);
  resultData.push(...formatNewsOrgData(newsOrgData));
  resultData.push(...formatGuardianData(newsGuardianData));
  resultData.push(...formatNewYorkTimesData(newsNewYorkTimesData));

  return resultData;
};

export const getHeadlines = async (searchTerm, category) => {
  const qParams = {
    q: searchTerm,
    category: category || undefined,
  };
  const resultData = [];
  const newsOrgTopHeadlinesData = await getTopHeadlines(qParams);
  resultData.push(...formatNewsOrgData(newsOrgTopHeadlinesData));

  return resultData;
};
