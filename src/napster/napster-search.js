import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fullTextSearch, NAPSTER_KEY } from "./napster-service";
import { useNavigate } from "react-router-dom";
function NapsterSearchScreen() {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchTerm);
  const [results, setResults] = useState([]);
  const searchNapster = async () => {
    const results = await fullTextSearch(search);
    setResults(results);
    navigate(`/napster/search/${search}`);
  };
  useEffect(() => {
    // searchNapster();
    if (searchTerm) {
      setSearch(searchTerm);
      searchNapster();
    }
  }, [searchTerm]);
  return (
    <div>
      <h1>Napster Search Screen {searchTerm}</h1>
      <div className="form-group">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchNapster} className="btn btn-primary">
          Search
        </button>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                {results.map((result) => {
                  return (
                    <td>
                      <Link to={`/napster/album/${result.id}`}>
                        <img
                          src={`https://api.napster.com/imageserver/v2/albums/${result.id}/images/300x300.jpg`}
                        />
                        <br />
                        <h2>{result.name}</h2>
                      </Link>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
}

export default NapsterSearchScreen;
