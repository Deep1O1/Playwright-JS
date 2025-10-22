export class DropDown {

    constructor(page){
        this.page = page;
        this.dropdownOption = page.locator('#select-demo');
        this.validationText = page.locator("[class *= 'selected-value']");
    }

    async selectOption(day){
        await this.dropdownOption.selectOption({value : `${day}`});
    }

    async validateDayName(){
        const text =  await this.validationText.textContent();
        return text;
    }

}