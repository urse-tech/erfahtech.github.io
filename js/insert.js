import data from "../json/isiproposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("judulProposal", data.title);
setInner("deskripsiProposal", data.description);
