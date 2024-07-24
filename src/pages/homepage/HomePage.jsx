import SearchBar from "../../components/searchbar/SearchBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            architecto consequatur iste veniam praesentium qui natus molestiae
            eius quos doloribus.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};
export default HomePage;
