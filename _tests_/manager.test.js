const Manager = require('../lib/manager');

describe("Manager", ()=>{
    describe("getName", () =>{
        it("should return manager name",() =>{
            const test = new Manager("name", "id", "email","officeNumber");
            const result = test.name;
            expect(result).toEqual('name');
        });
    });
    describe("getId", () =>{
        it("should return manager id",() =>{
            const test = new Manager("name", "id", "email","officeNumber");
            const result = test.id;
            expect(result).toEqual('id');
        });
    });
    describe("getEmail",() =>{
        it("returns manager's email",()=>{
            const test = new Manager("name", "id", "email","officeNumber");
            const result = test.email;
            expect(result).toEqual('email');
        });
    });
    describe("getOfficeNumber", () =>{
        it("returns manager's office number",()=>{
        const test = new Manager("name", "id", "email","officeNumber")
        const result = test.officeNumber;
        expect(result).toEqual('officeNumber');
        });
    });
});