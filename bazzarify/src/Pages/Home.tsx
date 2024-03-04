import { Link } from "react-router-dom";
import Card from "../Components/Card";
const Home = () => {
  return (
    <div className="homePage">
      <section>

      </section>

      <div className="temp">
        <h1>Latest Products</h1>
        <Link className="moreButton" to="/Search">More</Link>
      </div>
      <main>
        <Card name="Boat airdopes" id="abibas" image="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" price={1700} stock={40} handler={() => { }} />
        <Card name="Gta V" id="adibas" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfmdwFO50d0FUcXq_Q20d_PNJQ9PSNxDJGw&usqp=CAU" price={2500} stock={30} handler={() => { }} />
      </main>
    </div>
  );
}

export default Home;
