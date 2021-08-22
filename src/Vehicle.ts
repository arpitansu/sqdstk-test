


export default class Vehicle{

    private number: string;
    private driverAge: number; // we can have seperate driver object but in this case it is not required to have a seperate one

    /**
     * 
     * @param number registration number of vehicle
     * @param driverAge age of the driver driving this vehicle
     */
    public constructor(number : string, driverAge: number){
        this.number = number;
        this.driverAge = driverAge;
    }

    /**
     * 
     * @returns number of the vehicle in string format
     */
    public getNumber() : string {
        return this.number;
    }

    /**
     * 
     * @returns age of the driver for this vehicle in number format
     */
    public getDriverage() : number {
        return this.driverAge;
    }
    
}