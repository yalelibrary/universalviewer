import {BaseEvents} from "./BaseEvents";
import {BaseExpandPanel} from "./BaseExpandPanel";
import { Bools } from "@edsilv/utils";

export class LeftPanel extends BaseExpandPanel {

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {

        super.create();

        this.$element.width(this.options.panelCollapsedWidth);

        this.component.subscribe(BaseEvents.TOGGLE_EXPAND_LEFT_PANEL, () => {
            if (this.isFullyExpanded){
                this.collapseFull();
            } else {
                this.expandFull();
            }
        });
    }

    init(): void {
        super.init();

        const shouldOpenPanel: boolean = Bools.getBool(this.extension.getSettings().leftPanelOpen, this.options.panelOpen);
        
        if (shouldOpenPanel) {
            this.toggle(true);
        }
    }

    getTargetWidth(): number {
        if (this.isFullyExpanded || !this.isExpanded) {
            return this.options.panelExpandedWidth;
        } else {
            return this.options.panelCollapsedWidth;
        }
    }

    getFullTargetWidth(): number {
        return this.$element.parent().width();
    }

    toggleFinish(): void {
        super.toggleFinish();

        if (this.isExpanded) {
            this.component.publish(BaseEvents.OPEN_LEFT_PANEL);
        } else {           
            this.component.publish(BaseEvents.CLOSE_LEFT_PANEL);
        }
        this.extension.updateSettings({leftPanelOpen: this.isExpanded});
    }

    resize(): void {
        super.resize();

        if (this.isFullyExpanded) {
            this.$element.width(this.$element.parent().width());
        }
    }
}
