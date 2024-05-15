import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./Space" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SpaceSettings extends $ControlSettings {
        prop1?: string | PropertyBindingInfo;
        src1?: string | PropertyBindingInfo;
    }

    export default interface Space {

        // property: prop1
        getProp1(): string;
        setProp1(prop1: string): this;

        // property: src1
        getSrc1(): string;
        setSrc1(src1: string): this;
    }
}
