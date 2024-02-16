import assert from 'node:assert';
import { test } from 'node:test';
import { convertStringToObject } from './body'

test('build body for example:body:string', function () {
  assert.deepEqual(
    convertStringToObject("example:body:string"),
    {
      example: {
        body: "string"
      }
    }
  );
});