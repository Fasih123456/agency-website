//CSS
import "./App.css";

//Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <body className="home page-template page-template-templates page-template-template-flexible page-template-templatestemplate-flexible-php page page-id-12 theme-blue">
        <div className="wrapper">
          <Header />
          <main className="site-content" role="main">
            <Hero />
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
