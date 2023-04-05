import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="container">
      <header>
        <h1>Tamil Matrimony.com</h1>
        <p>It starts with a Correct choice...</p>
      </header>
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <Link to='/Contact'>
          <button className="next1" type="submit">Contact</button>
        </Link>
          <li><a href="#About">About</a></li>
          <li><a href="#Register">Register</a></li>
          <li><a href="#Login">Login</a></li>
        </ul>
      </nav> 
      <main>
        <h2>Looking For</h2>
        <form>
        Groom
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          <label>
            Age
            <select>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
            </select>
          </label>
          <label>
            Religion
            <select>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
            </select>
          </label>
          <button>Search</button>
        </form>
        <div className="helpline">
          <p>Urgent Helpline Number</p>
          <p>Mon to Sat 11am to 11.05am IST</p>
          <p>+91 9856479566</p>
        </div>
      </main>
      <footer>
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Success Stories">Success Stories</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#Show All Profiles">Show All Profiles</a></li>
            <li><a href="#Company">Company</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#About Us">About Us</a></li>
            <li><a href="#Terms And Conditions">Terms And Conditions</a></li>
            <li><a href="#Privacy Policy">Privacy Policy</a></li>
          </ul>
        </nav>
        <div className="social">
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#youtube"><i className="fab fa-youtube"></i></a>
        </div>
        
      </footer>

    </div>
  );
}

export default Home;
