import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";

function Home() {
  return (
    <main>
      <Banner />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Home;
