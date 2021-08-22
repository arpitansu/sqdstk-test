import Vehicle from "./Vehicle";


export default class ParkingSlot{

    private isSlotEmpty: boolean = true;
    private slotNumber: number; // attaching slot number for easy access
    private vehicle: Vehicle;

    /**
     * 
     * @param slotNumber number for this parking slot
     */
    constructor(slotNumber : number){
        this.slotNumber = slotNumber;
    }

    /**
     * 
     * @returns position of this parking slot in a parking lot
     */
    public getPosition() : number {
        return this.slotNumber;
    }

    /**
     * 
     * @returns boolean if parking slot is empty or not
     */
    public isEmpty() : boolean {
        return this.isSlotEmpty;
    }

    /**
     * 
     * @param vehicle vehcle object to be parked in this parking slot
     */
    public park(vehicle: Vehicle) : void{
        if(!this.isEmpty()) throw new Error("Slot is not empty");
        this.vehicle = vehicle;
        this.isSlotEmpty = false;
    }

    /**
     * 
     * @returns vehicle object parked in this parking slot
     */
    public getVehicle(): Vehicle {
        if(this.isSlotEmpty) throw new Error("Slot is empty");
        return this.vehicle;
    }

    /**
     * unpark vehicle from this parking slot and make it available again for other vehicles
     */
    public unpark() : void {
        if(this.isSlotEmpty) throw new Error("No vehicle is parked");
        this.isSlotEmpty = true;
    }
}