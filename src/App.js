import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Custom.css'
import Home from './components/Home';
import Listings from './components/Listings';
import Cart from './components/Cart';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import HeaderNavbar from './components/HeaderNavbar';
import BROKENIMAGE from './assets/images/noimage.gif';
import Img01 from './assets/images/noimage.gif';
import Img02 from './assets/images/noimage.gif';
import Img03 from './assets/images/noimage.gif';
import Img04 from './assets/images/noimage.gif';
import Img05 from './assets/images/noimage.gif';
import Img06 from './assets/images/noimage.gif';
import Img07 from './assets/images/noimage.gif';
import Img08 from './assets/images/noimage.gif';
import Img09 from './assets/images/noimage.gif';
import Img10 from './assets/images/noimage.gif';
import Img11 from './assets/images/11.jpg';
import Img12 from './assets/images/12.jpg';
import Img13 from './assets/images/13.jpg';
import Img14 from './assets/images/14.jpg';
import Img15 from './assets/images/15.jpg';
import Img16 from './assets/images/16.jpg';
import Img17 from './assets/images/17.jpg';
import Img18 from './assets/images/18.jpg';
import Img19 from './assets/images/19.jpg';
import Img20 from './assets/images/20.jpg';
import Footer from './components/Footer';

function App() {

	const[cart, setCart] = useState([]);

	const products = [
		{
			id: 1,
			name: "Test Book",
			image: Img01,
			price: 20.00,
			desc: "The origin story in a series of bestselling novels."
		},
		{
			id: 2,
			name: "Test Book 2: The Sequel (AUTOGRAPHED HARDCOVER)",
			image: Img02,
			price: 10000.00,
			desc: "The highly-anticipated sequel! A rare copy autographed by its mysterious author, Dr. Lorem Ipsum."
		},
		{
			id: 3,
			name: "Test Book 3: This Time It's Personal",
			image: Img03,
			price: 15.00,
			desc: "Sergeant Foo Bar, seeking revenge for his missing son, confronts the Hello World Order."
		},
		{
			id: 4,
			name: "Kahoot Black Ops Training Manual",
			image: Img04,
			price: 500,
			desc: "Learn the secret tactics the U.S. military uses to gain the upper hand in all Kahoot-based confrontations."
		},
		{
			id: 5,
			name: "Singly Linked Goldfish",
			image: Img05,
			price: 2,
			desc: "Goldfish containing an address pointing to the next Goldfish in memory."
		},
		{
			id: 6,
			name: "Doubly Linked Goldfish",
			image: Img06,
			price: 4,
			desc: "Allows two-way traversal between Goldfish, but requires more space than singly-linked Goldfish."
    },
    {
			id: 7,
			name: "Heap of Goldfish",
			image: Img07,
			price: 8,
			desc: "A partially-ordered structure of Goldfish with the highest-priority Goldfish stored at the root."
    },
    {
			id: 8,
			name: "Stack of Goldfish",
			image: Img08,
			price: 16,
			desc: "A structure of Goldfish that observes L(G)IF(G)O (Last Goldfish In, First Goldfish Out)."
    },
    {
			id: 9,
			name: "Queuestack of Goldfish",
			image: Img09,
			price: 32,
			desc: "A stack of Goldfish queues. Useful for when you want some FIFO in your LIFO."
    },
    {
			id: 10,
			name: "Goldfish Overflow",
			image: Img10,
			price: 655.36,
			desc: "65,535 Goldfish. If you add one more, they all disappear."
    },
    {
			id: 11,
			name: "Haunted Active Porcelain Cow Doll",
			image: Img11,
			price: 45,
			desc: "(Author's note: I *actually* bought this awful thing while constructing this project, and it will likely arrive sometime this week. Expect it to haunt future Zoom calls.)"
    },
    {
			id: 12,
			name: "\"Helth\" Face Mask",
			image: Img12,
			price: 12,
			desc: "stonks"
    },
    {
			id: 13,
			name: "Nicolas Cage Stud Earrings",
			image: Img13,
			price: 8,
			desc: "Item ID #13 for a reason. Perhaps more haunted than the actual cow doll."
    },
    {
			id: 14,
			name: "Nicolas Cage Reversible Sequin Pillow",
			image: Img14,
			price: 7,
			desc: "Yes, this is a real item people actually made and are selling. See Wish.com for further information."
    },
    {
			id: 15,
			name: "Casper the Ghost VHS",
			image: Img15,
			price: 4,
			desc: "You know what they say: \"Going once, going twice...\""
    },
    {
			id: 16,
			name: "Mamma Mia 2 DVD",
			image: Img16,
			price: 7,
			desc: "Here we go again."
    },
    {
			id: 17,
			name: "Hot Dog Sandwich",
			image: Img17,
			price: 5,
			desc: "...but I repeat myself (or do I?)."
    },
    {
			id: 18,
			name: "Pizza Pineapple",
			image: Img18,
			price: 6,
			desc: "Everyone asks if pineapple belongs on pizza, but does anyone ever ask if pizza belongs on pineapple? The age-old question, finally answered. Leave your prejudice at the door."
    },
    {
			id: 19,
			name: "Hot Dog Pizza",
			image: Img19,
			price: 17,
			desc: "Now you're thinking with portals."
    },
    {
			id: 20,
			name: "A sheep!",
			image: Img20,
			price: 200,
			desc: "I've always taken offense to the word \"sheep\" being thrown around with a negative connotation. Sheep are adorable."
    },
	]

	return (
		<Router>
			<div>

				<HeaderNavbar />

        <main>
          <Switch>
            <Route path="/listings">
              <Listings products={ products }/>
            </Route>
            <Route path="/cart">
              <Cart cart={ cart }/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <Footer />

			</div>
		</Router>
	);
}

export default App;
