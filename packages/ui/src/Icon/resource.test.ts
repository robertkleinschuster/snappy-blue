import {Resource, ResourceCollection} from "./resource.ts";

describe('ResourceCollection', () => {
    it('should throw error when adding a resource with the same name twice', () => {
        const resources = new ResourceCollection()
        resources.add(new Resource('test', new Map()))
        expect(() => resources.add(new Resource('test', new Map()))).toThrowError('Resource with name `test` already added.')
    });
    it('should throw error when trying to get char of invalid font family', () => {
        const resources = new ResourceCollection()
        expect(() => resources.getChar('test', 'test')).toThrowError('No resource with name: `test`')
    });
    it('should expose the names of all added resources', () => {
        const resources = new ResourceCollection()
        resources.add(new Resource('test', new Map()))
        resources.add(new Resource('test2', new Map()))
        expect(resources.names).toEqual(['test', 'test2'])
    });
});