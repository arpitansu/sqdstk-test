
import { expect } from 'chai';
import 'mocha';
import ParkingLot from '../ParkingLot';
import ParkingSlot from '../ParkingSlot';
import Vehicle from '../Vehicle';

describe('Test Parking Lot', () => {
    const slots = 6;
    const parkingLot = new ParkingLot(slots);

    it('Test slots numbering correctness', () => {
        const parkingSlots : ParkingSlot[] = parkingLot.getSlots();
        for(let i = 0; i < parkingSlots.length; i++){
            expect(parkingSlots[i].getPosition()).to.equal(i+1);
        }
    });

    it('Test parking vehicle', () => {
        const vehicle = new Vehicle('KA-01-HH-1234', 21);
        expect(parkingLot.getSlots()[0].isEmpty()).to.equal(true);
        parkingLot.parkVehicle(vehicle);
        expect(parkingLot.getSlots()[0].isEmpty()).to.equal(false);
        expect(vehicle.getNumber()).to.equal(parkingLot.getSlots()[0].getVehicle().getNumber());
    });

    it('Test getting slot with registration number and driver age', () => {
        expect(parkingLot.searchByRegistrationNumber('KA-01-HH-1234')).to.be.an('array'); // vehicle list
        expect(parkingLot.searchByRegistrationNumber('KA-01-HH-1235')).to.be.an('array'); //no vehicle still list
        expect(parkingLot.searchByDriverAge(21)).to.be.an('array'); // list
        expect(parkingLot.searchByDriverAge(22)).to.be.an('array'); // list
    })
    
    it('Test unparking vehicle', () => {
        parkingLot.unpark(1); // slot number 1 parked in above case
        expect(parkingLot.getSlots()[0].isEmpty()).to.equal(true);
    });
})

describe('Test Parking slot and vehicle', () => {
    const slotNumber = 1;
    const parkingSlot = new ParkingSlot(slotNumber);
    const vehicle = new Vehicle('KA-01-HH-1234', 21);

    it('should return correct slot number', () => {
        expect(parkingSlot.getPosition()).to.equal(slotNumber);
    });

    it('should be empty', () => {
        expect(parkingSlot.isEmpty()).to.equal(true);
    });
    
    it('park vehicle in slot', () => {
        parkingSlot.park(vehicle);
        expect(parkingSlot.isEmpty()).to.equal(false);
        expect(parkingSlot.getVehicle().getNumber()).to.equal(vehicle.getNumber());
        expect(parkingSlot.getVehicle().getDriverage()).to.equal(vehicle.getDriverage());
    });
})