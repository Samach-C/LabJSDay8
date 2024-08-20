// import { sayGoodbye as g, he } from "./module1.js";
import * as say from "./module1.js";
import helloJS from "./module2.js";



function sayHi() {
    console.log('Hello Modules');
}

sayHi()


say.sayHello()
say.sayGoodbye()


helloJS()