class Stack {
   constructor() {
      this.top = -1;
      this.items = {};
   }
}

describe("create empty", () => {
   it("wordked", () => {
      const stack = new Stack();
      expect(stack.top).toBe(-1);
      expect(stack.items).toEqual({});
   });
});
