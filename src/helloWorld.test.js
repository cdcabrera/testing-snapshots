import Hello from './helloWorld';

describe("HelloWorld", () => {
  it('should render a string of HTML', () => {
    expect(Hello.world()).toMatchSnapshot();
  });
});
