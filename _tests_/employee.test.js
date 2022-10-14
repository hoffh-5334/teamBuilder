const Employee = require('../lib/employee');

describe("Employee", ()=>{

    describe("getName", () =>{
        it("should return employee name",() =>{
            const test = new Employee("name", "id", "email");
            const result = test.name;
            expect(result).toEqual('name');
        });
    });
    describe("getId", () =>{
        it("should return employee id",() =>{
            const test = new Employee("name", "id", "email");
            const result = test.id;
            expect(result).toEqual('id');
        });
    });
    describe("getEmail",() =>{
        it("returns employee's email",()=>{
           const test = new Employee("name", "id", "email");
           const result = test.email;
            expect(result).toEqual('email');
        });
    });
});