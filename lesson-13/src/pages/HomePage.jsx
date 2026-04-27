import {Link, useNavigate} from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  
  function navigationHandler() {
   navigate('/products');
  }
  
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Go to <Link to={"/products"}>Products</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>Navigate</button>
      </p>
    </div>
  )
};
