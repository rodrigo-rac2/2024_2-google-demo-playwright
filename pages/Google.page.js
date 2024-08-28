export default class GooglePage {
    constructor(page) {
        this.page = page;
    }

    get searchInput() {
        return this.page.getByLabel('Pesquisar', { exact: true });
    }

    get searchButton() {
        return this.page.getByLabel('Pesquisa Google').first();
    }

    async open() {
        await this.page.goto('https://www.google.com/');
    }

}