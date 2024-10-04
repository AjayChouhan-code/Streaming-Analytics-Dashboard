import React, { useState } from "react";
import { streamData } from "../data/tableSectionData";

export const TableSection = () => {
  const [filterArtist, setFilterArtist] = useState("");
  const [filterSong, setFilterSong] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortedData = [...streamData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "ascending" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter(
    (item) =>
      item.artist.toLowerCase().includes(filterArtist.toLowerCase()) &&
      item.song.toLowerCase().includes(filterSong.toLowerCase())
  );

  const requestSort = (key, direction) => {
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-section">
      <div className="row">
        <div className="col-lg-6 col-md-4">
          <h3 className="mb-4">Recent Streams</h3>
        </div>
        <div className="col-lg-6 col-md-8 text-md-end">
          <input
            type="text"
            placeholder="Filter by artist"
            value={filterArtist}
            onChange={(e) => setFilterArtist(e.target.value)}
            style={{ marginRight: "10px" }}
          />

          <input
            type="text"
            placeholder="Filter by song"
            value={filterSong}
            onChange={(e) => setFilterSong(e.target.value)}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Artist</th>
              <th>
                Date Streamed
                <span className="arrow-div">
                  <span
                    className="arrow-up"
                    onClick={() => requestSort("dateStreamed", "ascending")}
                  >
                    ▲
                  </span>
                  <span
                    className="arrow-down"
                    onClick={() => requestSort("dateStreamed", "descending")}
                  >
                    ▼
                  </span>
                </span>
              </th>
              <th>
                Stream Count
                <span className="arrow-div">
                  <span
                    className="arrow-up"
                    onClick={() => requestSort("streamCount", "ascending")}
                  >
                    ▲
                  </span>
                  <span
                    className="arrow-down"
                    onClick={() => requestSort("streamCount", "descending")}
                  >
                    ▼
                  </span>
                </span>
              </th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.song}</td>
                <td>{row.artist}</td>
                <td>{row.dateStreamed}</td>
                <td>{row.streamCount}</td>
                <td>{row.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;
