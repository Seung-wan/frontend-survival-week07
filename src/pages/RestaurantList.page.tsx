import { Link } from 'react-router-dom';

export default function RestaurantListPage() {
  return (
    <>
      <h1>식당 목록</h1>
      <ul>
        <li>
          <Link to="/restaurants/detail/1">메가반점</Link>
        </li>
        <li>
          <Link to="/restaurants/detail/2">메리김밥</Link>
        </li>
        <li>
          <Link to="/restaurants/detail/3">혹등고래카레</Link>
        </li>
      </ul>
    </>
  );
}
