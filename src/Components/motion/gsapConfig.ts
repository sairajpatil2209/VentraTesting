import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins globally once
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };