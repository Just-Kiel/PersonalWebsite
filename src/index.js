import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import projectsLoad from "./scripts/projects";
import * as infos from "./scripts/projects.json"

projectsLoad(infos);
initScrollReveal(targetElements, defaultProps);
initTiltEffect();