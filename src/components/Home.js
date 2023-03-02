export default function Home({ loggedIn }) {
    return (
      <div className="container">
        <h1>Home</h1>
        {loggedIn ? <h2>You are logged in</h2> : <h2>You are not logged in</h2>}
      </div>
    );
  }
  