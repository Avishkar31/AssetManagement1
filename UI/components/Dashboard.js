import React, { useEffect, useState, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import classes from "./Dashboard.module.css";
import AssetForm from "./AssetForm";
import AssetDetails from "./AssetDetails";

const Dashboard = () => {
  const [assets, setAssets] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [showDetails, setShowDetails] = useState(null);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const fetchAllAssets = async (params = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(
        `http://localhost:8080/asset/all-assets?${query}`
      );
      const data = await res.json();
      setAssets(data.assets || []);
      setFilteredAssets(data.assets || []);
    } catch (err) {
      console.log("error occurred -> ", err);
    }
  };

  const addAssetHandler = (newAsset) => {
    setIsFormOpen(false);
    const newAssetList = [newAsset, ...assets];
    setAssets(newAssetList);
    setFilteredAssets(
      newAssetList.filter((asset) =>
        JSON.stringify(asset).toLowerCase().includes(searchText)
      )
    );
  };

  const handleFilter = (e) => {
    const text = e.target.value;
    setSearchText(text);
    const newSearchParams = {
      nodeName: text,
      serialNumber: text,
      issuedTo: text
    };
    fetchAllAssets(newSearchParams);
  };

  useEffect(() => {
    fetchAllAssets();
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Issue To", accessor: "issuedTo" },
      { Header: "Desk Location", accessor: "deskLocation" },
      { Header: "Type", accessor: "type" },
      { Header: "Model", accessor: "model" },
      { Header: "Node Name", accessor: "nodeName" },
      { Header: "Serial Number", accessor: "serialNumber" },
      { Header: "Allocation", accessor: "allocation" },
      { Header: "Period", accessor: "period" },
      { Header: "Accessories", accessor: "accessories" },
      { Header: "Issuing Person", accessor: "issuingPerson" }
    ],
    []
  );

  const data = useMemo(() => filteredAssets, [filteredAssets]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      {isFormOpen && <AssetForm addAssetToGrid={addAssetHandler} />}
      {showDetails && (
        <AssetDetails
          asset={showDetails}
          onClose={() => setShowDetails(null)}
        />
      )}
      <section className={classes.container}>
        <div className={classes.header}>
          <div className={classes.tagAssetBtn} onClick={openForm}>
            -Tag Asset-
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleFilter}
            className={classes.searchInput}
          />
        </div>
        <div className={classes.table}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.length ? (
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      onClick={() => setShowDetails(row.original)}
                    >
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columns.length} className={classes.noData}>
                    No Records to show
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
