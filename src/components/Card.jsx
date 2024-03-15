import { Link, useNavigate } from "react-router-dom";

function Card({ title, img, description, action, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route); 
  };

  return (
    <Link to={route} className="card-link">
      <div
        className="card rounded-md mt-5  relative overflow-hidden transition-transform transform-gpu hover:scale-110 transition ease-in-out delay-150 cards"
       
      >
        <img src={img} className="card-img-top object-cover h-50 w-full" alt="Card Image" loading="lazy" />

        <div className="card-body flex flex-col gap-4">
          <h5 className="card-title text-xl font-semibold">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            type="button"
            className="btn btn-primary absolute bottom-3 buttons font-bold outline-none decoration-black"
            onClick={handleClick}
          >
            {action}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
