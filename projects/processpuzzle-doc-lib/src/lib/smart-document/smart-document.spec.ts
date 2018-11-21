import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';

import { SmartDocument } from './smart-document';
import {Content} from '../generic-content/content';

describe('SmartDocument entity', () => {
  const SOMETHING_ELSE = 'something else';
  const DOCUMENT_APPLICATION = 'test-app';
  const DOCUMENT_TITLE = 'Document One';
  const DOCUMENT_NAME = 'doc1';
  const jsonObject = {
    application: 'test-app',
//    id: '1',
    name: 'doc1',
    contents: [] as Content[],
    title: 'Document One'
  };

  const jsonConvert: JsonConvert = new JsonConvert();
  jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
  jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
  jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

  let document: SmartDocument;

  beforeEach(() => {
    document = new SmartDocument( DOCUMENT_APPLICATION );
    document.name = DOCUMENT_NAME;
    document.title = DOCUMENT_TITLE;

    const content = new Content( '1' );
    content.contentComponent = 'TextContent';
    content.contentValue = '<h1>Hello</h1>';
    document.addContent( content );
  });

  it('properties can be read', () => {
    expect( document.application ).toEqual( DOCUMENT_APPLICATION );
    expect( document.name ).toEqual( DOCUMENT_NAME );
    expect( document.title ).toEqual( DOCUMENT_TITLE );
  });

  it('properties can be set', () => {
    document.application = SOMETHING_ELSE;
    document.name = SOMETHING_ELSE;
    document.title = SOMETHING_ELSE;

    expect( document.application ).toEqual( SOMETHING_ELSE );
    expect( document.name ).toEqual( SOMETHING_ELSE );
    expect( document.title ).toEqual( SOMETHING_ELSE );
  });

  it('can be serialized to JSON', () => {
    const serializedDocument = jsonConvert.serialize( document ) ;
    expect( serializedDocument ).toEqual( jsonObject );
  });

  it('can be deserialized from JSON', () => {
    const deserializedDocument: SmartDocument = (<any>jsonConvert).deserializeObject( jsonObject, SmartDocument ) ;
    expect( deserializedDocument ).toEqual( document );
  });
});
