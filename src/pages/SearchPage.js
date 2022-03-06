import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../context/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { v4 as uuidv4 } from "uuid";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); //API call

  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <img
            className="search-page__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="search-page__header-body">
          <Search hideButtons />
          <div className="search-page__options">
            <div className="search-page__options-left">
              <div className="search-page__option" key={uuidv4()}>
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search-page__option" key={uuidv4()}>
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search-page__option" key={uuidv4()}>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search-page__option" key={uuidv4()}>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search-page__option" key={uuidv4()}>
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search-page__option" key={uuidv4()}>
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="search-page__options-right">
              <div className="search-page__option" key={uuidv4()}>
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search-page__option" key={uuidv4()}>
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search-page__results">
          <p className="search-page__result-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search-page__result" key={uuidv4()}>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search-page__result-image"
                      key={uuidv4()}
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
              </a>
              <a href={item.link}>{item.displayLink}</a>
              <a className="search-page__result-title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="search-page__result-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
