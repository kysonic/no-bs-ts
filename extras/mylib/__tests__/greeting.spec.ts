import { greeting } from "../src/index";

describe('greeting', () => { 
  it("should introduce me", () => {
    expect(greeting('Anton', 'Mirosh')).toEqual('Hello Anton Mirosh');
  })
 })