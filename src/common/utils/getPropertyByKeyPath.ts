export function getPropertyByKeyPath(targetObj: any, keyPath: string): string | undefined {
    var keys = keyPath.split('.');
    if (keys.length === 0) return undefined;
    keys = keys.reverse();
    var subObject = targetObj;

    while (keys.length) {
        var k = keys.pop();
        if (!subObject.hasOwnProperty(k)) return undefined;
        else subObject = subObject[k];
    }
    return subObject;
}
