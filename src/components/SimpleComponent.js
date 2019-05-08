
class SimpleComponent extends Component {
  
  state = {
    mood: "happy",
    
  }
  
  render() {
    return (
      <div>{props.mood}</div>
      )
  }
}
export default SimpleComponent;