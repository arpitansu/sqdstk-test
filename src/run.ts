// this is driver code
//this code was for testing purpose ignore

import ParkingLot from "./ParkingLot";
import ParkingSlot from "./ParkingSlot";
import Vehicle from "./Vehicle";

let pl = new ParkingLot(6);
console.log(`Created parking of ${pl.getSlots().length} slots`);

let park : ParkingSlot = pl.parkVehicle(new Vehicle("KA-01-HH-1234", 21));
console.log(`Car with registration number ${park.getVehicle().getNumber()} has been parked at slot number ${park.getPosition()}`);
park = pl.parkVehicle(new Vehicle("PB-01-HH-1234", 21));
console.log(`Car with registration number ${park.getVehicle().getNumber()} has been parked at slot number ${park.getPosition()}`);

let search : ParkingSlot[] = pl.searchByDriverAge(21);
if(search.length > 0){
    let ans : number[] = [];
    for(let slot of search){
        ans.push(slot.getPosition());
    }
    console.log(ans.join(","));
}else{
    console.log(`No parked car matches the query`);
}
search = pl.searchByDriverAge(23);
if(search.length > 0){
    let ans : number[] = [];
    for(let slot of search){
        ans.push(slot.getPosition());
    }
    console.log(ans.join(","));
}else{
    console.log(`No parked car matches the query`);
}

park = pl.parkVehicle(new Vehicle("PB-01-TG-2341", 40));
console.log(`Car with registration number ${park.getVehicle().getNumber()} has been parked at slot number ${park.getPosition()}`);
search = pl.searchByRegistrationNumber("PB-01-HH-1234");
if(search.length > 0){
    let ans : number[] = [];
    for(let slot of search){
        ans.push(slot.getPosition());
    }
    console.log(ans.join(","));
}else{
    console.log(`No parked car matches the query`);
}
let vehicle : Vehicle = pl.unpark(2);
console.log(`Slot number ${2} vacated, the car with vehicle registration number "${vehicle.getNumber()}" left the space, the driver of the car was of age ${vehicle.getDriverage()}`);
park = pl.parkVehicle(new Vehicle("HR-29-TG-3098", 39));
console.log(`Car with registration number ${park.getVehicle().getNumber()} has been parked at slot number ${park.getPosition()}`);
search = pl.searchByRegistrationNumber("PB-01-HH-1234");
if(search.length > 0){
    let ans : number[] = [];
    for(let slot of search){
        ans.push(slot.getPosition());
    }
    console.log(ans.join(","));
}else{
    console.log(`No parked car matches the query`);
}

search = pl.searchByDriverAge(18);
if(search.length > 0){
    let ans : string[] = [];
    for(let slot of search){
        ans.push(slot.getVehicle().getNumber());
    }
    console.log(ans.join(","));
}else{
    console.log(`No parked car matches the query`);
}