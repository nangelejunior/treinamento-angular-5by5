export class User {
  constructor(
    public id: string = "",
    public name: string = "",
    public username: string = "",
    public password: string = "",
    public roles: string[] = [],
    public token: string = ""
  ) { }
}
