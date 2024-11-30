import Header from "./header";
import Main from "./main";

export default function Home() {
  return (
    <div className="container  mx-auto">
      <header className=" px-[24px]">
        <Header />
      </header>
      <main className="pt-[41px]">
        <Main />
      </main>
      <footer></footer>
    </div>
  );
}
