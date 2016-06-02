var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'http://www.facebook.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
});

// var LikeButton = React.createClass({
//   getInitialState: function() {
//     return {liked: false};
//   },
//   handleClick: function(event) {
//     this.setState({liked: !this.state.liked});
//   },
//   render: function() {
//     var text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <p onClick={this.handleClick}>
//         You {text} this. Click to toggle.
//       </p>
//     );
//   }
// });

// ReactDOM.render(
//   <LikeButton />,
//   document.getElementById('example')
// );



// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <p>
//         Hello, <input type="text" placeholder="Your name here" />!
//         It is {this.props.date.toTimeString()}
//       </p>
//     );
//   }
// });

// setInterval(function() {
//   ReactDOM.render(
//     <HelloWorld date={new Date()} />,
//     document.getElementById('example')
//   );
// }, 500);



// ReactDOM.render(
//   <Avatar username="pwh" />,
//   document.getElementById('content')
// );


// var CheckLink = React.createClass({
//   render: function() {
//     // 这样会把 CheckList 所有的 props 复制到 <a>
//     return <a {...this.props}>{'√ '}{this.props.children}</a>;
//   }
// });

// ReactDOM.render(
//   <CheckLink href="/checked.html">
//     Click here!
//   </CheckLink>,
//   document.getElementById('content')
// );

// var FancyCheckbox = React.createClass({
//   getInitialState: function() {
//     return {checked: this.props.checked};
//   },
//   handleClick: function(event){
//     this.setState({checked:!this.state.checked})
//     console.log(this.state.checked);
//   },
//   render: function() {
//     var fancyClass = this.state.checked ? 'FancyChecked' : '';
//     return (
//       <div className={fancyClass+' fancyClass'} onClick={this.handleClick}>
//         {this.props.children}
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <FancyCheckbox checked={true}>
//     Hello world!
//   </FancyCheckbox>,
//   document.getElementById('content')
// );

// var FancyCheckbox = React.createClass({
//   getInitialState: function() {
//     return {checked: this.props.checked};
//   },
//   handleClick: function(event){
//     this.setState({checked:!this.state.checked})
//     console.log(this.state.checked);
//   },
//   render: function() {
//     var fancyClass = this.state.checked ? 'FancyChecked' : 'FancyUnchecked';
//     // 反模式：`checked` 会被传到里面的组件里
//     return (
//       <div {...this.props} className={fancyClass} onClick={this.handleClick}/>
//     );
//   }
// });

// var FancyCheckbox = React.createClass({
//   render: function() {
//     var { checked, ...other } = this.props;
//     var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
//     return (
//       <div {...other} className={fancyClass} />
//     );
//   }
// });
// var FancyCheckbox = React.createClass({
//   render: function() {
//     var { checked, title, ...other } = this.props;
//     var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
//     var fancyTitle = checked ? 'X ' + title : 'O ' + title;
//     return (
//       <label>
//         <input {...other}
//           checked={checked}
//           className={fancyClass}
//           type="checkbox"
//         />
//         {fancyTitle}
//       </label>
//     );
//   }
// });


// var  FancyCheckbox = React.createClass ({
//   render: function() {
//         return (
//             <div>
//               <input type="radio" name="opt" defaultChecked /> Option 1
//               <input type="radio" name="opt" /> Option 2
//               <select defaultValue="C">
//                 <option value="A">Apple</option>
//                 <option value="B">Banana</option>
//                 <option value="C">Cranberry</option>
//               </select>
//             </div>
//         );
//       }
// });

// ReactDOM.render(
//   <FancyCheckbox />,
//   document.getElementById('content')
// );
// var MyComponent = React.createClass({
//   handleClick: function() {
//     // Explicitly focus the text input using the raw DOM API.
//     React.findDOMNode(this.refs.myTextInput).focus();
//   },
//   render: function() {
//     // The ref attribute adds a reference to the component to
//     // this.refs when the component is mounted.
//     return (
//       <div>
//         <input type="text" ref="myTextInput" />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.handleClick}
//         />
//       </div>
//     );
//   }
// });
var App = React.createClass({
   getInitialState: function() {
     return {userInput: ''};
   },
   handleChange: function(e) {
     this.setState({userInput: e.target.value});
   },
   clearAndFocusInput: function() {
     // Clear the input
     this.setState({userInput: ''}, function() {
       // This code executes after the component is re-rendered
       this.refs.theInput.getDOMNode().focus();   // Boom! Focused!
     });
   },
   render: function() {
     return (
       <div>
         <div onClick={this.clearAndFocusInput}>
           Click to Focus and Reset
         </div>
         <input
           ref="theInput"
           value={this.state.userInput}
           onChange={this.handleChange}
         />
       </div>
     );
   }
 });

ReactDOM.render(
  <App />,
  document.getElementById('content')
);