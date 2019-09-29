export class User {
  constructor(
    public idUsuario?: number,
    public documento?: string,
    public nome?: string,
    public dataNascimento?: Date,
    public email?: string,
    public nacionalidade?: string,
    public endereco?: string,
    public bairro?: string,
    public cep?: string,
    public uf?: string,
    public cidade?: string,
    public complememto?: string,
    public numero?: number,
    public senha?: string
  ) {}
}
