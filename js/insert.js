import data from "../json/isiproposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("judulProposal", data.title);
setInner("deskripsiProposal", data.description);

setInner("name1", data.team[0].name1);
setInner("npm1", data.team[0].npm1);
setInner("email1", data.team[0].email1);
setInner("github1", data.team[0].github1);
setInner("name2", data.team[1].name2);
setInner("npm2", data.team[1].npm2);
setInner("email2", data.team[1].email2);
setInner("github2", data.team[1].github2);
