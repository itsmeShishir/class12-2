# React + Vite

- We will learn About the Jsx -> java script xml -> html and js 
- Components -> it is a function which returns jsx
- props -> properties -> it is a object which is passed to a component
- children -> it is a object which is passed to a component
- state -> it is a object which is passed to a component
- Life cycle 
- rfce -> shortcut to create a react component
- Folder Structure -> src -> components -> index.js -> App.js
- How to use js and css and their ways to use it


<!-- import React from "react";
// how to use css and js in react js 
import "./External.css";
function App() {
  let abc = 2
  let bcd = 2
  let styles = {backgroundColor: "blue", color: "white"}
  return <div>
    <h1 style={{backgroundColor: "red", color: "green"}}>Hello world</h1>
    <h2 style={styles}>THis is internal css code</h2>
    <h3 className="h3">THis is external css code {abc+bcd}</h3>
  </div>;
}
export default App;
 -->

props
<!-- import React from "react";
import Card from "./Components/Card";

function App() {
  return <div className="flex gap-4 justify-around flex-wrap">
    <Card data={{title: "The Future of Wireless Technology", body:"Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next.", img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"}}/>
    <Card data={{title: "संसद् अवरोध : सभामुख र कानुनमन्त्रीसहित चार दलका प्रमुख सचेतक छलफलमा ", body:"Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next.", img: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/chhalfal-1162025095721.jpg&w=1001&h=0"}}/>
    <Card data={{title: "The Future of Wireless Technology", body:"Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next.", img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"}}/>
  </div>;
}

export default App; -->

<!-- 
import React from "react";

function Card(props) {
  return (
    <div className="w-[400px] h-[600px] border-2 border-gray-200 ">
        <img className="w-[400px]  object-cover" src={props.img} alt="" />
        <h2 className="p-2 font-bold text-3xl ">{props.title}</h2>
        <p className="p-2 text-gray-600">
            {props.body}
        </p>
        <a href="#" className="p-2 text-red-600"> Read More</a>
    </div>
  );
}

export default Card;
 -->

<!-- import React from "react";
import Card from "./Components/Card";

function App() {
  return <div className="flex gap-4 justify-around flex-wrap">
    <Card title= "The Future of Wireless Technology" body="Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next." img= "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" />
    <Card title= "संसद् अवरोध : सभामुख र कानुनमन्त्रीसहित चार दलका प्रमुख सचेतक छलफलमा " body= "Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next." img= "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/chhalfal-1162025095721.jpg&w=1001&h=0" />
    <Card title= "The Future of Wireless Technology" body="Exploring the latest trends in wireless technology and how they impact our daily lives. From 5G networks to IoT devices, discover what's coming next." img= "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" />
  </div>;
}

export default App;
 -->