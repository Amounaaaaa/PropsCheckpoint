import './App.css';
import Profile from './Profil/Profile';
import {Col,Image} from 'react-bootstrap';
import {Navbar,Nav,FormControl,Button,Accordion,Card} from 'react-bootstrap';

function App() {
  const styleObject={
    color:"darkred",
    textAlign:'center',
                
}
var fullName;
var bio="bio";
var profession="Student"
  const HandleName = name => alert(name);
  return (
    <div style={styleObject}>
  

    <Profile  name={fullName}  bio={bio}  profession={profession} HandleName={HandleName}/> 
    <Col xs={6} md={4}>
               <Image className="img" src={"profileImage.jpg"} alt=""  roundedCircle />
     </Col>
   
  </div>
  );
}

export default App;
//
