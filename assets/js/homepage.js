function busList() {
    let from = document.getElementById("from").value
    let destination = document.getElementById("destination").value

    let busData = getbusData(from, destination)

    displaybusList(busData)
}


function getbusData(from, destination) {
    let buses = [
        { from: 'Delhi', to: 'Chandigarh', time: '10;00 AM' },
        { from: 'Delhi', to: 'Shimla', time: '10;00 PM' },
        { from: 'Chandigarh', to: 'Delhi', time: '12;00 PM' },
        { from: 'Chandigarh', to: 'Delhi', time: '02;00 AM' },
        { from: 'Delhi', to: 'Shimla', time: '09;00 PM' },
        { from: 'Delhi', to: 'Shimla', time: '08;00 AM' },
        { from: 'Chandigarh', to: 'Delhi', time: '04;00 PM' },
        { from: 'Chandigarh', to: 'Shimla', time: '06;00 AM' },
        { from: 'Shimla', to: 'Ambala', time: '01;00 PM' },
        { from: 'Shimla', to: 'Delhi', time: '12;00 AM' },
        { from: 'Chandigarh', to: 'Ambala', time: '11;00 PM' },
        { from: 'Shimla', to: 'Chandigarh', time: '01;00 PM' }
    ]
}
