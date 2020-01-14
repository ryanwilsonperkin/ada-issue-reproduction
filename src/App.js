import React from "react";

function App() {
  const [adaLoaded, setAdaLoaded] = React.useState(false);

  // Wait until adaReady resolves before using Ada
  React.useEffect(() => {
    window.adaReady.then(() => {
      const email = "ryan@example.com";
      try {
        window.adaEmbed.setMetaFields({ email });
      } catch (error) {
        console.error(error);
      }
      setAdaLoaded(true)
    });
  }, []);

  return (
    <div className="App">
      <h1>Is Ada loaded?</h1>
      <h2>{adaLoaded ? "Yes" : "No"}</h2>
    </div>
  );
}

export default App;
