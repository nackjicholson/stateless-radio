function statelessRadio(React) {
  function StatelessRadio({ greeting = 'Hello', message = 'World!' } = {}) {
    return <h1>{greeting}, {message}</h1>;
  }

  return StatelessRadio;
}

export default statelessRadio;
