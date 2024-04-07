import React, { useRef } from 'react'
import classes from './AssetForm.module.css'

const AssetForm = ({ addAssetToGrid }) => {
    const issueToRef = useRef();
    const deskLocationRef = useRef();
    const typeRef = useRef();
    const modelRef = useRef();
    const nodeRef = useRef();
    const serialNumberRef = useRef();
    const allocationRef = useRef();
    const periodRef = useRef();
    const cpuRef = useRef();
    const lcdMonitorRef = useRef();
    const dockingStationRef = useRef();
    const mouseRef = useRef();
    const keyboardRef = useRef();
    const powerAdaptorLaptopRef = useRef();
    const powerAdaptopDockingStationRef = useRef();
    const laptopBagRef = useRef();
    const modularBatteryRef = useRef();
    const laptopLockRef = useRef();
    const hddRef = useRef();
    const headphoneRef = useRef();
    const cardReaderRef = useRef();
    const printerRef = useRef();
    const mobileRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            'issuedTo': issueToRef.current.value,
            'deskLocation': deskLocationRef.current.value,
            'type': typeRef.current.value,
            'model': modelRef.current.value,
            'nodeName': modelRef.current.value,
            'serialNumber': serialNumberRef.current.value,
            'allocation': allocationRef.current.value,
            'period': periodRef.current.value,
            'assessories': {
                'CPU': cpuRef.current.value,
                'LCD Monitor': lcdMonitorRef.current.value,
                'Docking Station': dockingStationRef.current.value,
                'Keyboard': keyboardRef.current.value,
                'Mouse': mouseRef.current.value,
                'Power Adapter (Laptop)': powerAdaptorLaptopRef.current.value,
                'Power Adaptor (Docking station)': powerAdaptopDockingStationRef.current.value,
                'Laptop Bag': laptopBagRef.current.value,
                'Modular Battery': modularBatteryRef.current.value,
                'Laptop Lock': laptopLockRef.current.value,
                'Internal HDD/ External HDD': hddRef.current.value,
                'Headphone': headphoneRef.current.value,
                'Cardreader': cardReaderRef.current.value,
                'Printer': printerRef.current.value,
                'Mobile': mobileRef.current.value
            }
        }
        await tagAsset(data);
        addAssetToGrid(data);
    }

    const tagAsset = async (data) => {
        const res = await fetch('http://localhost:8080/asset/tag-asset', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const response = await res.json();
    }
    return (
        <section className={classes.assetFormPopup}>
            <div className={classes.backdrop}></div>
            <form onSubmit={submitHandler} className={classes.assetForm}>
                <div className={classes.header}>Hardware Allocation & Receipt From</div>
                <div className={classes.details}>
                    <div className={classes.control}>
                        <label htmlFor="issueTo">Issue To</label>
                        <input id="issueTo" ref={issueToRef} type="text" placeholder='Enter employee name..' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='deskLocation'>Desk Location</label>
                        <input id="deskLocation" ref={deskLocationRef} type="text" placeholder='Enter desk location..' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='type'>Type</label>
                        <input id="type" ref={typeRef} type="text" placeholder='Asset type..' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='model'>Model</label>
                        <input id="model" ref={modelRef} type="text" placeholder='Model no.' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='node'>Node</label>
                        <input id="node" ref={nodeRef} type="text" placeholder='Enter Node name..' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='serialNumber'>Serial Number</label>
                        <input id="serialNumber" ref={serialNumberRef} type="text" placeholder='Enter serial number..' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='allocation'>Allocation</label>
                        <input id="allocation" ref={allocationRef} type="text" placeholder='Enter allocation type..' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='period'>Period</label>
                        <input id="period" ref={periodRef} type="text" placeholder='Enter period..' />
                    </div>
                </div>
                <div className={classes.assessoriesLabel}>Assessories: </div>
                <div className={classes.assessories}>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='cpu'>CPU</label>
                        <input id="cpu" ref={cpuRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='lcdMonitor'>LCD Monitor</label>
                        <input id="lcdMonitor" ref={lcdMonitorRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='dockingStation'>Docking Station</label>
                        <input id="dockingStation" ref={dockingStationRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='keyboard'>Keyboard</label>
                        <input id="keyboard" ref={keyboardRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='mouse'>Mouse</label>
                        <input id="mouse" ref={mouseRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='powerAdaptorLaptop'>Power Adaptor (Laptop)</label>
                        <input id="powerAdaptorLaptop" ref={powerAdaptorLaptopRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='powerAdaptopDockingStation'>Power Adaptop (Docking Station)</label>
                        <input id="powerAdaptopDockingStation" ref={powerAdaptopDockingStationRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='laptopBag'>Laptop Bag</label>
                        <input id="laptopBag" ref={laptopBagRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='modularBattery'>Modular Battery</label>
                        <input id="modularBattery" ref={modularBatteryRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='laptopLock'>Laptop Lock</label>
                        <input id="laptopLock" ref={laptopLockRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='hdd'>Internal HDD/ External HDD</label>
                        <input id="hdd" ref={hddRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='headphone'>Headphone</label>
                        <input id="headphone" ref={headphoneRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='cardReader'>Card Reader</label>
                        <input id="cardReader" ref={cardReaderRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='printer'>Printer</label>
                        <input id="printer" ref={printerRef} type="number" placeholder='0' />
                    </div>
                    <div className={classes.assessoriesControl}>
                        <label htmlFor='mobile'>Mobile</label>
                        <input id="mobile" ref={mobileRef} type="number" placeholder='0' />
                    </div>
                </div>
                <button type='submit' className={classes.submitBtn}>Submit</button>
            </form>
        </section>
    )
}

export default AssetForm