export default function MediaCard({ item }: any) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3>{item.Title}</h3>
      <p>{item.Year}</p>
      <img src={item.Poster} alt={item.Title} width={100} />
    </div>
  );
}