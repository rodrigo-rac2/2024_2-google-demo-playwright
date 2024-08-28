export default class GoogleResultsPage {
    constructor(page) {
        this.page = page;
    }

    get uepbLink() {
        return this.page.getByRole('link', { name: 'UEPB - Universidade Estadual da Paraíba UEPB https://uepb.edu.br' })
    }

}