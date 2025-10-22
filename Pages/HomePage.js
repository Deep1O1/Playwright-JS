export class HomePage {

    constructor(page) {
        this.page = page;
        this.dropDownOption = page
            .locator("//div[@class = 'container__selenium']/ul/li/a[text() = 'Select Dropdown List']");
        this.dragDropOption = page
            .locator("//div[@class = 'container__selenium']/ul/li/a[text() = 'Drag & Drop Sliders']");
        this.datePickerOption = page
            .locator("//div[@class = 'container__selenium']/ul/li/a[text() = 'Bootstrap Date Picker']");   
    }

    async selectDropDownOption(){
        await this.dropDownOption.click();
    }

    async selectDragDropOption(){
        await this.dragDropOption.click();
    }

    async selectDatePickerOption(){
        await this.datePickerOption.click();
    }

}