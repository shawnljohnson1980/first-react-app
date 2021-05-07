import MyNewComponent from "./components/MyNewComonent";
import PersonCard from "./components/PersonCard";
import Age from "./components/Age.jsx";
function New() {
  return (
    <>
      <PersonCard />
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
      <table class="table-striped border border-rounded ">
        <thead>
          <th class="border boder-rounded border-white">Head 1</th>
          <th class="border boder-rounded border-white">Head 2</th>
          <th class="border boder-rounded border-white">head 3</th>
        </thead>
        <tbody>
          <td class="border boder-rounded border-white">Data 1</td>
          <td class="border boder-rounded border-white"> Data 2</td>
          <td class="border boder-rounded border-white">Data 3</td>
        </tbody>
      </table>
      <br></br>
      <div className="App">
        <MyNewComponent />
      </div>
    </>
  );
}
export default New;
