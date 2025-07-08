type Run = (miles: number) => boolean;
let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  }
  return false;
};
console.log(runner(9));

type Greet = (name: string) => string;
const greet: Greet = (name) => `Hello, ${name}`;
console.log(greet("marmot"));

function log(message: string, user?: string) {
  console.log(`${user ?? "system"}: ${message}`);
}

log("Hello");
log("Hello", "marmot");
