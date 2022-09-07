import { useSelect } from "@mui/base";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import "./Style.css";

const Home = () => {
  const [data, setData] = useState([]);
  const axios = require("axios").default;

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/tv/on_the_air?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1",
      method: "GET",
    })
      .then((v) => {
        setData(v.data.results);
        console.log(v);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const Going = (v) => {
    navigate("/info", { state: v });
  };

  return (
    <section className="container">
      <header className="bg-dark">
        <img src="" alt="" />
        <input type="text" />
        <div></div>
      </header>

      <div className="mainCard">
        <div className="leftCard">
          <div className="leftPostion">
            <h1>
              chap tomon Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Velit reiciendis iure excepturi quibusdam eos voluptatem
              eveniet quasi fugit at, ipsa cumque porro provident, officia dicta
              molestiae nobis dolore accusantium. Id.
            </h1>
          </div>
        </div>
        <div className="centerCard">
          <div className="row">
            {data.length > 0 ? (
              data.map((v, i) => {
                return (
                  <div className="col-lg-3 col-sm-12" key={i}>
                    <div className="card mb-5 rounded" onClick={() => Going(v)}>
                      <div className="card w-100">
                        <img
                          src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`}
                          className=""
                        />
                      </div>
                      <h3 className="fs-6 text-body m-1">{v.name}</h3>
                      <h4 className="fs-6 text-muted m-1">{v.popularity}</h4>

                      <button className="btn btn-info">Add</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="rightCard">
          <div className="positionRight">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              modi est animi, aliquid quo laboriosam alias velit non commodi
              minus delectus, unde quos aliquam eligendi fuga magnam quasi
              placeat expedita!
            </h1>
          </div>
        </div>
      </div>

     
    </section>
  );
};
export default Home;
