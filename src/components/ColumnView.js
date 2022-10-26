import { Grid } from "@mui/material";
import { CardNews } from "./CardNews";

export const ColumnView = ({ title, news }) => {
  let count = 0;
  return (
    <>
      <h3 className="column-view">{title}</h3>
      <div className="column-view-content">
        <Grid container spacing={2}>
          {news
            ? news.map(function (item, i) {
                if ((!item.multimedia.length)||(count === 8)) {
                  return false;
                }
                count++;
                return (
                  <Grid key={i} item xs={3}>
                    <CardNews news={item} imgheight="150"/>
                  </Grid>
                );
              })
            : Array(8)
                .fill(null)
                .map(function (item, i) {
                  return (
                    <Grid key={i} item xs={3}>
                      <CardNews news={item} imgheight="150"/>
                    </Grid>
                  );
                })}
        </Grid>
      </div>
    </>
  );
};
