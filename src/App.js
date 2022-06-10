function App() {
  const title = "blog post";
  const body = "This is a blog post";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];

  const loading = false;
  const showComment = true;

  if (loading) return <h1>Loading....</h1>;
  const commentBlock = (
    <div className="comments">
      <h3>Comments: ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}> {comment.text} </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      {showComment && commentBlock}
    </div>
  );
}

export default App;
