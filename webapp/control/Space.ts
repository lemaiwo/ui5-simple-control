import Control from "sap/ui/core/Control";
import Event from "sap/ui/base/Event";
import SpaceRenderer from "./SpaceRenderer";
/**
 * @extends Control
 *
 * @constructor
 * @public
 * @namespace be.wl.simplecontrol.control
 */
export default class Space extends Control {
    constructor(id?: string | $SpaceSettings);
    constructor(id?: string, settings?: $SpaceSettings);
    constructor(id?: string, settings?: $SpaceSettings) { super(id, settings); }
    static readonly metadata = {
        properties: {
            prop1: "string",
            src1: "string"
        },
        events: {}
    };
    static renderer = SpaceRenderer;
    onAfterRendering() {
        const numStars = 1000;
        const mainDiv = this.getDomRef() as HTMLElement;
        for (let i = 0; i < numStars; i++) {
            const { top, left } = this.getRandomPosition(mainDiv);
            mainDiv.append(this.getRandomStar(top, left));
        }
    }
    getRandomStar(top: string, left: string) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = top;
        star.style.left = left;
        return star;
    }
    getRandomPosition(element: HTMLElement) {
        return {
            top: `${this.getRandomNumber(element.offsetHeight || 1000)}px`,
            left: `${this.getRandomNumber(element.offsetWidth)}px`,
        };
    }
    getRandomNumber(value: number) {
        return Math.floor(Math.random() * value);
    }
    setProp1(value: string) {
        this.setProperty("prop1", value, true);
        return this;
    }
    setSrc1(value: string) {
        this.setProperty("src1", value, true);
        return this;
    }
}
