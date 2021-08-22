import ParkingSlot from "./ParkingSlot";
import Vehicle from "./Vehicle";

/**
 * ParkingLot: Details and APIs for one single parking lot
 */

export default class ParkingLot{

    // keeps parking slot details
    private slots: Array<ParkingSlot> = [];

    /**
     * 
     * @param slots total number N for creating parking slots in parking lot
     */
    public constructor(slots: number){
        //generating parking slots based on input
        for(let i = 1; i <= slots; i++){
            this.slots.push(new ParkingSlot(i));
        }
    }

    //get slots array
    /**
     * 
     * @returns array of parking slot object
     */
    public getSlots() : Array<ParkingSlot> {
        return this.slots;
    }

    //vehicle will be parked in an empty parking slot
    /**
     * 
     * @param vehicle vehcle object
     * @returns single parking slot object
     */
    public parkVehicle(vehicle: Vehicle): ParkingSlot {
        for(let i=0; i < this.slots.length; i++){
            if(this.slots[i].isEmpty()){
                this.slots[i].park(vehicle);
                return this.slots[i];
            }
        }
        throw new Error('No Slot available');
    }

    //unpark vehicle if already parked else throw error
    /**
     * 
     * @param slotNumber slot number in the parking slot 1 to N
     * @returns Vehicle object
     */
    public unpark(slotNumber: number) : Vehicle {
        //vacate slot slotNumber - 1 // because array starts from 0;
        try{
            let tmpVehicle : Vehicle = this.slots[slotNumber-1].getVehicle();
            this.slots[slotNumber-1].unpark();
            return tmpVehicle;
        }catch(e){
            throw new Error('No parked car matches the query');
        }
    }

    //search parked vehicle with age of driver
    /**
     * 
     * @param age driver age
     * @returns array of parking slots where query matches
     */
    public searchByDriverAge(age: number) : Array<ParkingSlot> {
        let ansList : Array<ParkingSlot> = [];
        for(let i = 0; i < this.slots.length; i++){
            if(!this.slots[i].isEmpty() && this.slots[i].getVehicle().getDriverage() == age){
                ansList.push(this.slots[i]); // slot
            }
        }
        return ansList;
    }

    //search parked vehicle with vehicle registration number
    /**
     * 
     * @param number vehicle registration number
     * @returns array of parking slots where query matches
     */
    public searchByRegistrationNumber(number: string) : Array<ParkingSlot> {
        let ansList : Array<ParkingSlot> = [];
        for(let i = 0; i < this.slots.length; i++){
            if(!this.slots[i].isEmpty() && this.slots[i].getVehicle().getNumber() == number){
                ansList.push(this.slots[i]); // slot
            }
        }
        return ansList;
    }

}
