import Link from "next/link";

export default function Article({ article }) {
  return (
    <div>
      <h1>Article</h1>
      {!article && "No article found"}
      <h2>{article && article.title}</h2>
      <p>{article && article.description}</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(
    "https://631db9f8789612cd07af479d.mockapi.io/article/1"
  );
  const article = await data.json();
  console.log(article);
  return {
    props: {
      article
    }
  }
}
