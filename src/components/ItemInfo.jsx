import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function ItemInfo({ items }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();

  const item = items.find((item) => item.id === id);

  return (
    <div>
      <h1>Item info {id}</h1>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <h3>Search Param {searchParams.get('q')}</h3>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}