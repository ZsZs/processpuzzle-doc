export class Content {
  private _id: string;
  private _contentComponent: string;
  private _contentValue: string;

  constructor( private _smartDocumentId: string ) {}

  // public accessors and mutators

  // protected, private helper methods

  // properties
  // @formatter:off
  get contentComponent(): string { return this._contentComponent; }
  get contentValue(): string { return this._contentValue; }
  get id(): string { return this._id; }
  get smartDocumentId(): string { return this._smartDocumentId; }
  set contentComponent( component: string ) { this._contentComponent = component; }
  set contentValue( value: string ) { this._contentValue = value; }
  // @formatter:on
}
