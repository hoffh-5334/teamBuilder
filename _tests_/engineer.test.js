const Engineer = require('../lib/engineer');

describe("Engineer", ()=>{
    describe("getName", () =>{
        it("should return engineer name",() =>{
            const test = new Engineer("name", "id", "email","github");
            const result = test.name;
            expect(result).toEqual('name');
        });
    });
    describe("getId", () =>{
        it("should return engineer id",() =>{
            const test = new Engineer("name", "id", "email","github");
            const result = test.id;
            expect(result).toEqual('id');
        });
    });
    describe("getEmail",() =>{
        it("returns engineer's email",()=>{
            const test = new Engineer("name", "id", "email","github");
            const result = test.email;
            expect(result).toEqual('email');
        });
    });
    describe("getGithub", () =>{
        it("returns engineer github",()=>{
        const test = new Engineer("name", "id", "email","github")
        const result = test.github;
        expect(result).toEqual('github');
        });
    });
});