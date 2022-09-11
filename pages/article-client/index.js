import Link from "next/link";
import { useEffect, useState } from "react";

function Article() {
  const [state, setState] = useState();
  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://631db9f8789612cd07af479d.mockapi.io/article/1"
      );
      const _data = await data.json();
      console.log(_data)
      setState(_data);
    })();
  }, []);
  return (
    <div>
      <h1>Article</h1>
      {!state && "No article found"}
      <h2>{state && state.title}</h2>
      <p>{state && state.description}</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Article;
