import Image from "next/image";
import Link from "next/link";

export default function Article({ article }) {
  return (
    <div>
      <h1>Article</h1>
      {!article && "No article found"}
      <h2>{article && article.title}</h2>
      <Image
        alt="article"
        src={article && article.image}
        width={450}
        height={350}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAwADAAAAAAAAAAAAAAABAgADBQZRkf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAS/9oADAMBAAIRAxEAPwCcz+TpSgWzLosToOQfYiIqtJkv/9k="
      ></Image>
      <p>{article && article.description}</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://631db9f8789612cd07af479d.mockapi.io/article/1"
  );
  const article = await data.json();
  console.log(article);
  return {
    props: {
      article,
    },
  };
}
