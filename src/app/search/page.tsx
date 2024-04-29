import ListNews from "./_components/ListNews";

async function SearchPage({ searchParams }: any) {
  const { title } = searchParams;

  // const newsDataResponse = await fetch(
  //   `${process.env.NEWS_API_URL}/search?q="${title}"&country=us&lang=en&in=title&apikey=${process.env.NEWS_API_KEY}`,
  //   { cache: "no-cache" }
  // ).catch((err) => notFound());

  // if (!newsDataResponse.ok) {
  //   return <div>server error</div>;
  // }

  // const newsData = await newsDataResponse.json();

  // const resultNewsData: Article[] = newsData.articles; // Assuming the data structure is { articles: CardInfoType[] }

  return (
    <main className="container mx-auto min-h-screen  items-center justify-between space-y-4 px-10 py-8">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <ListNews title={title} />
      {/* </Suspense> */}
    </main>
  );
}

export default SearchPage;
