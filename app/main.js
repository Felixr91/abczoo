import Alligator from "./models/a.js";
import Bear from "./models/b.js";
import Cheetah from "./models/c.js";
import Deer from "./models/d.js";
import Elephant from "./models/e.js";
import Flamingo from "./models/f.js"
import Gorilla from "./models/g.js";
import Hawk from "./models/h.js";
import Iguana from "./models/i.js";
import Jaguar from "./models/j.js";
import Kangaroo from "./models/j.js"
import Lemur from "./models/l.js";
import Macoronipenguin from "./models/m.js";
import Narwhal from "./models/n.js";
import Octopus from "./models/o.js";
import Parrot from "./models/p.js";
import Quail from "./models/q.js";
import Rhino from "./models/r.js";
import Salamander from "./models/s.js";
import Tiger from "./models/t.js";
import Unicornfish from "./models/m.js";
import Vampirebat from "./models/v.js";
import Walrus from "./models/w.js";
import Xrayfish from "./models/x.js";


let ally = new Alligator("Ally", "green", "four", "warthog");
let yogi = new Bear("Yogi", "brown", "four", "berries");
let chester = new Cheetah("Chester", "Yellow", "four", "Zebra");
let bambi = new Deer("Bambi", "Brown", "four", "berries");
let edgar = new Elephant("Edgar", "grey", "four", "peanuts");
let flanders = new Flamingo("Flanders", "pink", "two", "shrimp");
let gordon = new Gorilla("Gordon", "black", "two", "coconuts");
let hawthorne = new Hawk("Hawthorne", "brown", "two", "snakes");
let igor = new Iguana("Igor", "green", "four", "flies");
let jaquelin = new Jaguar("Jaquelin", "brown", "four", "gazelle");
let karen = new Kangaroo("Karen", "brown", "two", "greens");
let lejuan = new Lemur("Lejuan", "grey", "two", "fruit");
let kraft = new Macoronipenguin("Kraft", "black and white", "two", "fish");
let narlinda = new Narwhal("Narlinda", "grey", "none", "shrimp");
let olivia = new Octopus("Olivia", "color-changing", "eight", "crab");
let paulette = new Parrot("Paulette", "red", "two", "seeds");
let quincy = new Quail("Quincy", "blue", "two", "seeds");
let raykwon = new Rhino("Raykwon", "grey", "four", "grass");
let sally = new Salamander("Sally", "green", "four", "bugs");
let tony = new Tiger("Tony", "orange", "four", "fish");
let ulysses = new Unicornfish("Ulysses", "pink", "none", "krill");
let vampiro = new Vampirebat("Vampiro", "black", "two", "people");
let wally = new Walrus("Wally", "grey", "none", "fish");



class App {
  constructor() {
    this.ally = ally
    this.yogi = yogi
    this.chester = chester
    this.bambi = bambi
    this.edgar = edgar
    this.flanders = flanders
    this.gordon = gordon
    this.hawthorne = hawthorne
    this.igor = igor
    this.jaquelin = jaquelin
    this.karen = karen
    this.lejuan = lejuan
    this.kraft = kraft
    this.narlinda = narlinda
    this.olivia = olivia
    this.paulette = paulette
    this.quincy = quincy
    this.raykwon = raykwon
    this.sally = sally
    this.tony = tony
    this.ulysses = ulysses
    this.vampiro = vampiro
    this.wally = wally

  }
  test() {
    console.log('tested')
  }
}

//attaches to HTML
window.app = new App()