import React from "react";
import ReactDOM from "react-dom/client";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const randomNo = Math.floor(Math.random() * allMemes.length + 1);
    const url = allMemes[randomNo].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  return (
    <main className="section-main">
      <div className="container-main">
        <div className="form">
          <input
            type="text"
            className="form__input"
            placeholder="Enter top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            className="form__input"
            placeholder="Enter bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
          <button className="form__button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          <img className="meme__img" src={meme.randomImg} alt="Meme Image" />
          <h2 className="meme__text top">{meme.topText}</h2>
          <h2 className="meme__text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
