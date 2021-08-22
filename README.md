- Please note this program uses `ts-node` to execute (no need to compile first)  
- `src/index` is just for driving the code according to needs of this test  
- Input file location in root directory if you have other data to test just copy paste content to this root dir input file
- Ignore `src/run` file it was just for testing purpose while developing  
- If testing in windows and then using linux sub system of windows or linux or mac then please delete node_modules folder and run command `npm install`

To run
1. `npm install`
3. `npm test`
2. `npm start` (input file already in root directory, please keep input file in same place else change location in `src/index` line `117` or update according to your needs, location is relative to `src/index` file)

#tests are under `src/tes`t  
#code is under `src/`  
#if input file contains line break at the end of the file you will get output as 'Unknown command'  

#requirements apis for puting data into system

Create apis
1. Create a parking with N lots  
2. Park vehicle with Number R and driver age X > return slot number  

Update apis
1. Leave slot s  

Get apis  
1. GET Slot number of car C with number R => return a slot  
2. GET slot numbers for driver age X => Return a list with all slots  
3. GET vehicle number R for driver age X => return a list with numbers R  

apis for gov  
1. Vehicle registration numbers for all cars parked by certain age driver  
2. slot number in which vehicle number is parked  
3. slot numbers in which all vehicles parked of a particular age  

