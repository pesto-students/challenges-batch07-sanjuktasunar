const deepCopyObject = objToCopy => {
    if (objToCopy == null) {
        return null;
      }
      else if (Array.isArray(objToCopy)) {
        return [objToCopy];
      }
      else if (typeof (objToCopy) != 'object') {
        return objToCopy;
      }
      else{
        let newObject = {};
        for (let k in objToCopy) {
          if (Object.prototype.hasOwnProperty.call(objToCopy,k)) {
            newObject[k] = deepCopyObject(objToCopy[k]);
          }
        }
        return newObject;
      }
};

export { deepCopyObject };
