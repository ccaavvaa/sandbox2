// tslint:disable:only-arrow-functions
// tslint:disable-next-line:no-implicit-dependencies
import * as chai from 'chai';
import './debug-test';
// tslint:disable-next-line:no-implicit-dependencies
import 'mocha';
import { HelloWorld } from '../lib/hello-world';

const expect = chai.expect;
// const assert = chai.assert;
describe('Hello World', function() {

    it('should say hello', function() {
        const helloWorld = new HelloWorld();
        const name = 'John';
        const actual = helloWorld.sayHello(name);
        const expected = 'Hello John';
        expect(actual).equals(expected);
    });
});
