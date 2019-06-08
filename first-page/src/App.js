import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import FontAwesome from 'react-fontawesome';
// import 'font-awesome/css/font-awesome.css'

// class App extends Component {
//     render() {
//         return(
//             <div className="container">                
//                 <HeaderComponent></HeaderComponent>
//                 <PageComponent ></PageComponent>
//             </div>
//         );
//     }
// }
 class App extends Component {
      render() {
        return(
        <div className="bg-fluid">
        <div className="container">
        <div className="container1">
        <div className="main-container">
            <div className="logo">
                <h1>Medium</h1>
            </div> &nbsp; &nbsp;

            <div className="searchbox">
                <i className="fas fa-search"></i>
            </div> &nbsp; &nbsp;
            <div className="mem">
                <a href="#">Become a Member</a> 
            </div> &nbsp; &nbsp;
            <div className="login-form">
                    <a href="#">Sign in</a> 
                    &nbsp; &nbsp;
                    <a href="#" className="rect">Get started</a>
            </div>
            
            
        </div>  
        <div className="tags">
            <a href="#">HOME</a>
            &nbsp; 
            <a href="#">ONEZERO</a>
            &nbsp;  
            <a href="#">ELEMENTAL</a> 
            &nbsp; 
            <a href="#">HEATED</a>
            &nbsp;
            <a href="#" className="t1">TECH</a> 
            &nbsp; 
            <a href="#" className="t1">STARTUPS</a>
            &nbsp; 
            <a href="#" className="t1">SELF</a> 
            &nbsp; 
            <a href="#" className="t1">POLITICS</a> 
            &nbsp; 
            <a href="#" className="t1">HEALTH</a>
            &nbsp; 
            <a href="#" className="t1">DESIGN</a> 
            &nbsp; 
            <a href="#" className="t1">HUMAN PARTS</a>
            &nbsp; 
            <a href="#" className="t1">MORE</a>  
         
        </div> 
        </div>
        <div className="container2">
            <div className="para" id="post">

                <Post url="https://6ba0333d-2ff8-4f5c-ba10-aa1a9c07c05c.mock.pstmn.io/page1" />
                
            </div> <br/>
            <div className="para" id="post">
                <Post url="https://6ba0333d-2ff8-4f5c-ba10-aa1a9c07c05c.mock.pstmn.io/page2" />
            </div> <br/>
            <div className="para">
                <Post url="https://6ba0333d-2ff8-4f5c-ba10-aa1a9c07c05c.mock.pstmn.io/page3" />
            </div> <br/>
            <div className="para">
                <Post url="https://6ba0333d-2ff8-4f5c-ba10-aa1a9c07c05c.mock.pstmn.io/page4" />
            </div>
        </div>
     </div>
 </div>
        );
      }
   }


class Post extends Component {


    constructor() {
        super();
        this.state = {
           
                title: "...",
                des: "...",
                auth:  "...",
                readtimes: "..."
              
        }
      }
      
      componentDidMount() {
        this.fetch();
      }
      
      fetch() {
        
        var { url } = this.props;
        
        
        axios.get(url)
          .then((response) => {
        //   if(baseUrl == "https://api.unsplash.com/search/photos/")
        {
            this.setState({
              title: response.data.data.title,
              des:  response.data.data.titledes,
              auth:  response.data.data.auth,         
              readtimes: response.data.data.readtimes             
            });
          }    
          
          })
          .catch(() => {
            alert("exception in proceess")
          });
      }





    render() {
        return(
    <div className="container2">
            <div className="para">
                <div className="mainb">
                    <h1>{this.state.title}</h1>
                </div>
                <div className="b1">
                    <p>{this.state.des}</p>
                </div>
                <div className="auth">
                    <p>{this.state.auth}</p>
                </div>
                <div className="new">
                <div className="pub">
                    <p> Apr {this.state.readtimes} min read &#9733;</p>
                </div>
                <div className="resp">
                    {/* <i className="fa fa-bookmark-o"></i>  */}
                    <i class="material-icons">&#xe866;</i>
                </div>
                </div>
            </div> <br/>
   </div>
        );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     return(
//       <div className="header">
//         <div className="first">
//           <h1>MEDIUM</h1>
//         </div>
//         <div className="last">
//           <Router>
//           <HeaderComponent></HeaderComponent>
//           <Switch>
//           <Route exact path='/search' component={SearchComponent}></Route>
//           <Route exact path='/become a member' component={MemberComponent}></Route>
//           <Route exact path='/signin' component={LoginComponent}></Route>
//           <Route exact path='/started' component={StartedComponent}></Route>

//           </Switch>
//           </Router>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
