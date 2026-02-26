function Card() {
  const title = "My Awesome Project";
  const description= "This is a discription of what I built";
  const emoji= "🔥";

  return (
    <div className= "card">
      <span style={{fontSize: "48px" }}>{emoji}</span>
      <h3>Title</h3>
      <p>description</p>
      </div>
  );
}

export default Card;