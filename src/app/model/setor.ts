export class Setor {

    private idSetor: number;
    private nome: string;
    private descricao: string;

    constructor() {
        this.idSetor = 0;
        this.nome = '';
        this.descricao = '';
    }

    public getIdSetor(): number {
        return this.idSetor;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

}
