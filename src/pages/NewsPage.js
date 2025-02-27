import { useEffect, useState } from "react";
import axios from "axios";
import { ColumnViewAlt } from "../components/ColumnViewAlt";
import { Layout } from "../components/Layout";

const NewsPage = () => {
  const [lateNews, setLateNews] = useState();
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
  return (
    <Layout>
      <ColumnViewAlt title="Lates News" news={lateNews} />
    </Layout>
  );
};

export default NewsPage;
