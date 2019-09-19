export const descriptorGenerator = (des)=>{
    return {
        enumerable: true,
        writable: true,
        configurable: true,
        ...des,
    };
};

export let methodDescriptorGenerator = (name, fn, placement='prototype')=>{
    return {
        key: name,
        kind: 'method',
        placement,
        descriptor: descriptorGenerator({value: fn}),
    };
};

// export let classFactory = (name, fn)=>{
//     return function(classDescriptor) {
//         console.log('!!!!!!!!!!!!!!!!');
//         console.log(classDescriptor.elements);
//         let {elements} = classDescriptor || [];

//         return {
//             ...classDescriptor,
//             elements: elements.concat([methodDescriptorGenerator(name, fn)]),
//         };
//     };
// };


export let classFactory = (name: string, fn)=>{
    return function(constructor) {
        console.log('!!!!!!!!!!!!!!!!!!!!');
        constructor.prototype[name] = fn;
    };
};