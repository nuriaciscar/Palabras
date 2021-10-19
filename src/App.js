import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <section className="words-boxes">
        <ul className="words-repository">
          <li>me</li>
          <li>JavaScript</li>
          <li>el</li>
          <li>la</li>
          <li>gusta</li>
          <li>odio</li>
          <li>no</li>
          <li>muy</li>
          <li>y</li>
          <li>Java</li>
          <li>mucho</li>
          <li>de</li>
          <li>poco</li>
          <li>programador</li>
          <li>amigo</li>
          <li>programadora</li>
          <li>amiga</li>
          <li>soy</li>
          <li>también</li>
          <li>pero</li>
          <li>gustan</li>
          <li>gatos</li>
          <li>los</li>
          <li>perros</li>
        </ul>
        <ul className="sentence"></ul>
      </section>
      <section className="create-words">
        <form className="form-words">
          <div className="form-group">
            <input
              type="text"
              className="form-words__word"
              placeholder="New word"
              required
            />
          </div>
          <div className="form-group">
            <select className="form-words__occurrences" required>
              <option value="">Max. occurrences</option>
              <option value="0">No limit</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" class="form-words__programming-language" />
              It's a programming language
            </label>
          </div>
          <div className="form-group">
            <button type="submit" class="form-words__button" disabled>
              Create
            </button>
          </div>
        </form>
      </section>
      <section className="info">
        <ul>
          <li>
            Number of words <span>15</span>
          </li>
          <li>
            Number of characters <span>74</span>
          </li>
          <li>
            Average length <span>5.32</span>
          </li>
          <li>
            Contains 2 programming language/s
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
