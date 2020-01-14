import React from "react";

function App() {
  const [adaLoaded, setAdaLoaded] = React.useState(false);

  // Wait until adaReady resolves before using Ada
  React.useEffect(() => {
    window.adaReady.then(() => setAdaLoaded(true));
  }, []);

  // Trigger setMetaFields when the button is clicked
  // Log any errors to the console
  // Shouldn't expect to see any errors
  const onClick = () => {
    try {
      const email = "ryan@example.com";
      window.adaEmbed.setMetaFields({ email });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Is Ada loaded?</h1>
      <h2>{adaLoaded ? "Yes" : "No"}</h2>
      <button disabled={!adaLoaded} onClick={onClick}>
        Trigger setMetaFields
      </button>
    </div>
  );
}

export default App;
