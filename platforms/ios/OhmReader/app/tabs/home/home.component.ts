import { resetCSSProperties } from 'tns-core-modules/ui/layouts/layout-base';
import { TextView } from 'tns-core-modules/ui/text-view';
import { dockProperty } from 'tns-core-modules/ui/layouts/dock-layout';
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    constructor(private page: Page) {
       //
    }

    ngOnInit(): void {
        //
    }
    
    clearTextFields(): void {

        let resitance: TextField = <TextField> this.page.getViewById("resitance");
        resitance.text = "";

        let volts: TextField = <TextField> this.page.getViewById("volts");
        volts.text = "";

        let ampsText: TextView = <TextField> this.page.getViewById("amps-text");
        ampsText.text = "";
    }

    calculateOhms():void {

        // Get text from text fields
        let resitance: TextField = <TextField> this.page.getViewById("resitance");
        let volts: TextField = <TextField> this.page.getViewById("volts");

        if(resitance.text != null && volts.text != null) {
            // Calculate ohms here
            // Voltage devided by Resitance
            let reistanceVal = parseFloat(resitance.text);
            let voltsVal = parseInt(volts.text);

            let results = voltsVal / reistanceVal;

            // TODO: - Put check in to force user to input floating point number

            let ampsText: TextView = <TextField> this.page.getViewById("amps-text");

            ampsText.text = results.toFixed(0);
        }
    }
}
