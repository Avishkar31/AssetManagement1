import React, { useEffect, useState } from 'react';
import classes from './Dashboard.module.css';
import AssetForm from './AssetForm';

const Dashboard = () => {
    const [assets, setAssests] = useState([]);
    const [isFromOpen, setIsFromOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredAssets, setFilteredAssets] = useState([]);

    const openForm = () => {
        setIsFromOpen(true);
    }

    const fetchAllAssets = async () => {
        const res = await fetch('http://localhost:8080/asset/all-assets');
        const data = await res.json();
        setAssests(data.assets);
        setFilteredAssets(data.assets);
    }

    const addAssetHandler = (newAsset) => {
        setIsFromOpen(false);
        setAssests([...assets, newAsset]);
        const newAssetList = [...assets, newAsset];
        setFilteredAssets(newAssetList.filter(asset => JSON.stringify(asset).toLowerCase().includes(searchText)));
    }

    const handleFilter = (e) => {
        const text = e.target.value;
        setSearchText(text);
        setFilteredAssets(assets.filter(asset => JSON.stringify(asset).toLowerCase().includes(text)));
    }

    useEffect(() => {
        fetchAllAssets();
    }, []);

    return (
        <>
            {isFromOpen && <AssetForm addAssetToGrid={addAssetHandler} />}
            <section className={classes.container}>
                <div className={classes.tagAssetBtn} onClick={openForm}>-Tag Assset-</div>
                <input type="text" onChange={handleFilter}/>
                <div className={classes.table}>
                    <div className={classes.header}>
                        <div className={classes.headerCell}>Issue To</div>
                        <div className={classes.headerCell}>Desk Location</div>
                        <div className={classes.headerCell}>Type</div>
                        <div className={classes.headerCell}>Model</div>
                        <div className={classes.headerCell}>Node Name</div>
                        <div className={classes.headerCell}>Serial Number</div>
                        <div className={classes.headerCell}>Allocation</div>
                        <div className={classes.headerCell}>Period</div>
                        <div className={classes.headerCell}>Assessories</div>
                        <div className={classes.headerCell}>Issueing Person</div>
                    </div>
                    {filteredAssets.map(asset => <AssetData asset={asset} key={asset._id} />)}
                </div>
            </section>
        </>
    )
}

export default Dashboard;

const AssetData = ({ asset }) => {
    return (
        <div className={classes.data}>
            <div className={classes.dataCell}>{asset.issuedTo || '-'}</div>
            <div className={classes.dataCell}>{asset.deskLocation || '-'}</div>
            <div className={classes.dataCell}>{asset.type || '-'}</div>
            <div className={classes.dataCell}>{asset.model || '-'}</div>
            <div className={classes.dataCell}>{asset.nodeName || '-'}</div>
            <div className={classes.dataCell}>{asset.serialNumber || '-'}</div>
            <div className={classes.dataCell}>{asset.allocation || '-'}</div>
            <div className={classes.dataCell}>{asset.period || '-'}</div>
            <div className={classes.dataCell}>Assessories</div>
            <div className={classes.dataCell}>{asset.issueingPerson || '-'}</div>
        </div>
    );
}