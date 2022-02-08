import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {" "}
      {type && (
        <div className="category">
          <span> {type === "movie" ? "Movies" : "Series"} </span>{" "}
          <select name="genre" id="genre">
            <option> Genre </option>{" "}
            <option value="adventure"> Adventure </option>{" "}
            <option value="comedy"> Comedy </option>{" "}
            <option value="crime"> Crime </option>{" "}
            <option value="fantasy"> Fantasy </option>{" "}
            <option value="historical"> Historical </option>{" "}
            <option value="horror"> Horror </option>{" "}
            <option value="romance"> Romance </option>{" "}
            <option value="sci-fi"> Sci - fi </option>{" "}
            <option value="thriller"> Thriller </option>{" "}
            <option value="western"> Western </option>{" "}
            <option value="animation"> Animation </option>{" "}
            <option value="drama"> Drama </option>{" "}
            <option value="documentary"> Documentary </option>{" "}
          </select>{" "}
        </div>
      )}{" "}
      <img src="https://picsum.photos/1800/1200" alt="featured " />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="info"
        />
        <span className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry 's standard dummy text ever
          since the 1500 s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </span>{" "}
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span> Play </span>{" "}
          </button>{" "}
          <button className="more">
            <InfoOutlined />
            <span> Info </span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Featured;
