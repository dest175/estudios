import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = ()=>{
    const navigate = useNavigate();
    const goToAbout = ()=>{
        navigate("/about");
    }
    return (
        <section>
            <h2>HOME page </h2>
            <ul>
                <li>
                    <Link to="/product/1">product</Link>

                </li>
                <li>

                    <Link to="/product/2">product 2</Link>
                </li>
            </ul>
            <button  onClick={goToAbout}>ABOUT</button>
            </section>

    )
}

export default Home;