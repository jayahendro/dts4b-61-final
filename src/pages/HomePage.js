import { useEffect, useState } from "react";
import axios from "axios";
import { ColumnView } from "../components/ColumnView";
import { Featured } from "../components/Featured";
import { Layout } from "../components/Layout";

const HomePage = () => {
  const [lateNews, setLateNews] = useState();
  const [featuredNews, setFeaturedNews] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=multimedia,web_url,headline,pub_date,source&sort=newest&api-key=6zIrHoWJysSrtp26iKtuu07A6Lr5jtSO`
      )
      .then((res) => {
        setLateNews(res.data.response.docs);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=6zIrHoWJysSrtp26iKtuu07A6Lr5jtSO`
      )
      .then((res) => {
        setFeaturedNews(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Featured title="Hot Topics" news={featuredNews} />
      <ColumnView title="Latest News" news={lateNews} />
    </Layout>
  );
};

export default HomePage;
