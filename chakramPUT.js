var chakram = require('C:/slimerTest/node_modules/chakram'),
    expect = chakram.expect;
describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.put("https://reqres.in/api/users/2",{"email":"lkkushan@yahoo.com","job":"eng"});
	expect(response).to.have.status(200);
	 expect(response).to.comprise.of.json({job: "eng" });
    return chakram.wait();
  });
}); 

