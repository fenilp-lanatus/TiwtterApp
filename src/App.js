import "./App.css";
import myImage from "./twitter.png";
import { Card, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  // console.log(enterTweet);

  const [enterTweet, setEnterTweet] = useState("");
  const [date, setDate] = useState(new Date());
  const [tweets, setTweets] = useState([]);

  const inputValue = (event) => {
    setEnterTweet(event.target.value);
  };

  const handleTweet = () => {
    console.log({ tweets });
    const len = tweets.length;
    const newData = tweets;
    tweets.push({ enterTweet, id: len + 1 });
    console.log(tweets);
    console.log(newData);
    console.log({ newData });
    setTweets(newData);
    setEnterTweet("");
  };
  // const handleTweet = () => {
  //   const len = tweets.length;
  //   const newData = { enterTweet, id: len + 1 };
  //   setTweets([newData]);
  //   setEnterTweet("");
  // };

  useEffect(() => {
    var timer = setTimeout(() => setDate(new Date()), 10);
    return function cleanup() {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="text">
        <img className="logo" src={myImage} alt="twiiter logo" />
        <h1 className="twitter">twitter</h1>
      </div>
      {/* <form className="box"> */}
      <div className="box">
        <TextField
          label="Let's Tweet"
          id="outlined-size-small"
          size="small"
          className="input"
          onChange={inputValue}
          value={enterTweet}
        />
        <Button variant="contained" className="tweet" onClick={handleTweet}>
          Tweet
        </Button>
        <div className="date">
          <p>{date.toLocaleTimeString()}</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
      </div>
      {/* {tweets.map((item) => { */}
      <div className="boxx">
        <div className="value">
          <ul>
            {console.log({ tweets })}
            {tweets.map((item) => {
              // {
              //   console.log({ item });
              // }
              return (
                <>
                  <Card key={item.id}>
                    <h2>{item.enterTweet}</h2>
                    <Button variant="contained" className="tweet">
                      Like
                    </Button>
                    <Button variant="contained" className="tweet">
                      Delete
                    </Button>
                  </Card>
                  {/* <li>{item.enterTweet}</li> */}
                </>
              );
            })}
          </ul>
        </div>
        {/* <div className="btn">
          <Button variant="contained" className="tweet">
            Like
          </Button>
          <Button variant="contained" className="tweet">
            Delete
          </Button>
        </div> */}
      </div>
      ;{/* })} */}
    </>
  );
}

export default App;
