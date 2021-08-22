import * as fs from 'fs';
import * as path from 'path';
import ParkingLot from './ParkingLot';
import ParkingSlot from './ParkingSlot';
import Vehicle from './Vehicle';

//command:- 
// Create_parking_lot N
// Park rNumber driver_age x
// Slot_numbers_for_driver_of_age x
// Slot_number_for_car_with_number R
// Leave S
// Vehicle_registration_number_for_driver_of_age x
enum eCommands{
    Create_parking_lot = "Create_parking_lot",
    Park = "Park",
    Slot_numbers_for_driver_of_age = "Slot_numbers_for_driver_of_age",
    Slot_number_for_car_with_number = "Slot_number_for_car_with_number",
    Leave = "Leave",
    Vehicle_registration_number_for_driver_of_age = "Vehicle_registration_number_for_driver_of_age"
}

/**
 * 
 * @param filePath path for the input file
 */
function Index(filePath: string){
    let fileDataArray = ParseFileData(filePath);
    try{
        Run(fileDataArray);
    }catch(e){
        console.log(e.message);
    }
}

//supporting function to parse the input file and make it usable by the code
function ParseFileData(filePath: string) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const fileDataArray = fileData.split("\r\n");
    return fileDataArray;
}

//takes the usable command from the input file and execute accordingly
function Run(fileDataArray: string[]) {
    let parking : ParkingLot;
    for(let data of fileDataArray){
        let dataArray = data.split(" ");
        
        switch(dataArray[0]){
            case eCommands.Create_parking_lot: {
                parking = new ParkingLot(Number(dataArray[1]));
                console.log(`Created parking of ${parking.getSlots().length} slots`);
                break;
            }
            case eCommands.Park: {
                const park: ParkingSlot = parking.parkVehicle(new Vehicle(dataArray[1], Number(dataArray[3])));
                console.log(`Car with registration number ${park.getVehicle().getNumber()} has been parked at slot number ${park.getPosition()}`);
                break;
            }
            case eCommands.Slot_numbers_for_driver_of_age: {
                const search : ParkingSlot[] = parking.searchByDriverAge(Number(dataArray[1]));
                if(search.length > 0){
                    let ans : number[] = [];
                    for(let slot of search){
                        ans.push(slot.getPosition());
                    }
                    console.log(ans.join(","));
                }else{
                    console.log(`No parked car matches the query`);
                }
                break;
            }
            case eCommands.Slot_number_for_car_with_number: {
                const search = parking.searchByRegistrationNumber(dataArray[1]);
                if(search.length > 0){
                    let ans : number[] = [];
                    for(let slot of search){
                        ans.push(slot.getPosition());
                    }
                    console.log(ans.join(","));
                }else{
                    console.log(`No parked car matches the query`);
                }
                break;
            }
            case eCommands.Leave: {
                try{
                    const vehicle : Vehicle = parking.unpark(Number(dataArray[1]));
                    console.log(`Slot number ${Number(dataArray[1])} vacated, the car with vehicle registration number "${vehicle.getNumber()}" left the space, the driver of the car was of age ${vehicle.getDriverage()}`);
                }catch(e) {
                    console.log(e.message);
                }
                break;
            }
            case eCommands.Vehicle_registration_number_for_driver_of_age: {
                const search = parking.searchByDriverAge(Number(dataArray[1]));
                if(search.length > 0){
                    let ans : string[] = [];
                    for(let slot of search){
                        ans.push(slot.getVehicle().getNumber());
                    }
                    console.log(ans.join(","));
                }else{
                    console.log(`No parked car matches the query`);
                }
                break;
            }

            default: {
                console.log("Unknown command");
            }
        }

    }
}

const locationOfFile = "/../input.txt";
Index(path.join(__dirname, ".") + locationOfFile);