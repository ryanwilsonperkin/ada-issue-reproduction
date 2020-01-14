import React from "react";

function App() {
  const [adaLoaded, setAdaLoaded] = React.useState(false);
  const [name, setName] = React.useState("ryan");
  const [email, setEmail] = React.useState("ryan@example.com");

  // Wait until adaReady resolves before using Ada
  React.useEffect(() => {
    window.adaReady.then(() => setAdaLoaded(true));
  }, []);

  // Call start once ready and also whenever metaFields change
  React.useEffect(() => {
    window.adaReady.then(() => {
      try {
        window.adaEmbed.start({
          metaFields: { email, name }
        });
      } catch (error) {
        console.error(error);
      }
    });
  }, [name, email]);

  const onChangeEmail = event => setEmail(event.target.value);
  const onChangeName = event => setName(event.target.value);

  return (
    <div className="App">
      <h1>Ada Test</h1>
      <p>Ada is loaded: {adaLoaded ? "Yes" : "No"}</p>
      <h2>Meta Fields</h2>
      <form>
        <label>
          Name:
          <input name="name" type="text" value={name} onChange={onChangeName} />
        </label>
        <label>
          Email:
          <input
            name="name"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
