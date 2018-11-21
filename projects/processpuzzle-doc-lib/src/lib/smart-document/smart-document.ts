import {JsonProperty} from 'json2typescript';

import {Content} from '../generic-content/content';

export class SmartDocument {
  @JsonProperty( 'application', String ) private _application: string | undefined = undefined;
  @JsonProperty( 'id', String ) private _id: string | undefined = undefined;
  @JsonProperty( 'contents', [Content], false ) private _contents: Content[] = [];
  @JsonProperty( 'name', String ) private _name: string | undefined = undefined;
  @JsonProperty( 'title', String ) private _title: string | undefined = undefined;

  constructor( application: string ) {
    this._application = application;
  }

  // public accessors and mutators
  public addContent( newContent: Content ): void {
    this._contents.push( newContent );
  }

  public removeContent( obsolateContent: Content ) {
    this._contents = this._contents.slice( this._contents.lastIndexOf( obsolateContent ) - 1, 1 );
  }

  // protected, private helper methods

  // properties
  // @formatter:off
  get application(): string { return this._application; }
  get contents(): Content[] { return this.contents; }
  get id(): string { return this._id; }
  get name(): string { return this._name; }
  get title(): string { return this._title; }
  set application( application: string ) { this._application = application; }
  set id( id: string ) { this._id = id; }
  set name( name: string ) { this._name = name; }
  set title( title: string ) { this._title = title; }
  // @formatter:on
}
