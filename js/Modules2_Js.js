// import { name as n, getName } from './Modules1_Js.js';
import * as file1 from './Modules1_Js.js'; //import all this at once
import {default as obj} from './Modules1_Js.js'; 

document.getElementById('heading').innerText = file1.name;

file1.getName(file1.name);

console.log(obj.obj);