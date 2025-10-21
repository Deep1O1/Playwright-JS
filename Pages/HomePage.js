export class HomePage {

    constructor(page) {
        this.page = page;
        this.dropDownOption = page.locator("//div[@class = 'container__selenium']/ul/li/a[text() = 'Select Dropdown List']");
    }

    async selectDropDownOption(){
        await this.dropDownOption.click();
    }

}