import {JsonProperty} from 'json2typescript';

export class Content {
  @JsonProperty( 'id', String ) private _id: string | undefined = undefined;
  @JsonProperty( 'contentComponent', String ) private _contentComponent: string | undefined = undefined;
  @JsonProperty( 'contentValue', String ) private _contentValue: string | undefined = undefined;

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
  set id( id: string ) { this._id = id; }
  // @formatter:on
}
