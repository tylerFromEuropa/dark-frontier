import quotes from "../assets/quotes.json";
import { useEffect, useState } from "react";
import "../CSS/Quote.css";

export default function Quote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    setQuote(
      quotes.spaceQuotes[Math.floor(Math.random() * quotes.spaceQuotes.length)]
    );
  }, []);
  return <div id="quote">{quote}</div>;
}
