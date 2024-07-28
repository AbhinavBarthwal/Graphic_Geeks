import { useState, useEffect } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomquote = data[Math.floor(Math.random() * data.length)];
      setQuote(randomquote.text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <p className="text-[3vw]  sm:text-[2vw] md:text-[1.2vw] text-yellow-400 "> &quot;{quote}&quot;</p>
    </div>
  );
};
export default RandomQuote;
