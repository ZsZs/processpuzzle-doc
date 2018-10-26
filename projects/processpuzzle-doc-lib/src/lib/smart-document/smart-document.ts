import {Content} from '../generic-content/content';

export class SmartDocument {
  private _application: string;
  private _id: string;
  private _contents: Content[];
  private _name: string;
  private _title: string;

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
  set name( name: string ) { this._name = name; }
  set title( title: string ) { this._title = title; }
  // @formatter:on
}
