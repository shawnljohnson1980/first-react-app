import MyNewComponent from "./components/MyNewComonent";
import PersonCard from "./components/PersonCard";
import Age from "./components/Age.jsx";
function New() {
  return (
    <>
      <h1>This is some really cool stuff </h1>
      <ul>
        <li>Add form</li>
        <li>Add Table</li>
        <li>Add image</li>
        <li>Add age counter</li>
      </ul>
      <div className="Age">
        <Age></Age>
      </div>
      <form></form>
      <br></br>
        <PersonCard
         firstName="Shawn"
         lastName="Johnson"
         age="40"
         hairColor="bald"/>
      <br></br>
      <div className="App">
        <MyNewComponent />
      </div>
    </>
  );
}
export default New;
