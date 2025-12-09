const request = require("supertest");
const { app, server } = require("../index");


describe("GET /", () => {
  it("should return greeting text", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Yogesh, Hello from CI/CD demo!");
  });
});


afterAll(() => {
  server.close();
});

