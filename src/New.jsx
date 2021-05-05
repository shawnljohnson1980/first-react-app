import MyNewComponent from "./components/MyNewComonent";
import PersonCard from "./components/PersonCard";

function New() {
  return (
    <>
      <PersonCard />
      <h1>This is some really cool stuff </h1>
      <ul>
        <li>Add form</li>
        <li>Add Table</li>
        <li>Add image</li>
      </ul>
      <form
        class="border border-rounded border-white shadow p-4"
        action=""
        method="post"
      >
        <form-group mt-3>
          <label htmlFor="date">Date:</label>
          <input
            class="shadow border border-rounded border-white"
            type="date"
            name="date"
            id=""
            placeholder="datetime=today"
          />
        </form-group>
        <br></br>
        <form-group>
          <label htmlFor="Name">Name:</label>
          <input
            class="shadow border border-rounded border-white "
            type="text"
            name="name"
            id=""
            placeholder="Your full name"
          />
        </form-group>
        <br></br>
        <form-group>
          <input
            class="shadow border border-rounded border-white btn btn-primary mt-3 mb-4"
            type="button"
            value="Create"
          />
        </form-group>
      </form>
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
