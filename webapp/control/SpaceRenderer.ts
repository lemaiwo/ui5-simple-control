import RenderManager from "sap/ui/core/RenderManager";
import Space from "./Space";
/**
 * Space renderer
 * @namespace be.wl.simplecontrol.control
 */
const SpaceRenderer = {
    apiVersion: 2,
    render: function (rm: RenderManager, control: Space) {
        rm.openStart("div", control).class("star-wars-intro").openEnd();
        rm.openStart("p").class("intro-text").openEnd();
        rm.text(control.getProp1());
        rm.close("p");
        rm.openStart("h2").class("main-logo").openEnd();
        rm.openStart("img").attr("src", control.getSrc1()).openEnd();
        rm.close("img");
        rm.close("h2");
        rm.openStart("div").class("main-content").openEnd();
        rm.openStart("div").class("title-content").openEnd();
        rm.close("div");
        rm.close("div");
        rm.close("div");
    }
};
export default SpaceRenderer;
