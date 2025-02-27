import { Card, CardActionArea, CardMedia, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { Link } from "react-router-dom";

export const CardNews = ({ news, imgheight }) => {
  console.log(imgheight);
  return (
    <>
      <Box component="div">
        {news ? (
          <Link to={"/news/" + news.web_url.replace('https://www.nytimes.com/', '')}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={imgheight}
                  image={"https://www.nytimes.com/" + news.multimedia[0].url}
                  alt={news.headline.main}
                />
              </CardActionArea>
            </Card>
          </Link>
        ) : (
          <Skeleton sx={{ height: imgheight+'px' }} animation="wave" variant="rounded" />
        )}
        {news ? (
          <Link to={"/news/" + news.web_url.replace('https://www.nytimes.com/', '')}>
            <h4 className="title-news font-serif">{news.headline.main}</h4>
          </Link>
        ) : (
          <Skeleton />
        )}
        <Box component="div" className="meta">
          {news ? (
            <>
              <span>{moment(news.pub_date).fromNow()}</span>
              <span>{news.source}</span>
            </>
          ) : (
            <Skeleton width="60%" />
          )}
        </Box>
      </Box>
    </>
  );
};
