const Intern = require('../lib/intern');

describe("Intern", ()=>{
    describe("getName", () =>{
        it("should return intern name",() =>{
            const test = new Intern("name", "id", "email","school");
            const result = test.name;
            expect(result).toEqual('name');
        });
    });
    describe("getId", () =>{
        it("should return intern id",() =>{
            const test = new Intern("name", "id", "email","school");
            const result = test.id;
            expect(result).toEqual('id');
        });
    });
    describe("getEmail",() =>{
        it("returns intern's email",()=>{
            const test = new Intern("name", "id", "email","school");
            const result = test.email;
            expect(result).toEqual('email');
        });
    });
    describe("getSchool", () =>{
        it("returns intern's school",()=>{
        const test = new Intern("name", "id", "email","school")
        const result = test.school;
        expect(result).toEqual('school');
        });
    });
});
