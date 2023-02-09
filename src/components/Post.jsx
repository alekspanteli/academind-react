// const names = ["Alex", "John"];

export default function Post(props) {
  const { name, body } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{body}</p>
    </div>
  );
}
