const jsObjectToJson = async (object: Record<string, any>) => {
  return JSON.stringify(eval("(" + object + ")"), null, 2);
};

const Utils = {
  JsObjectToJson: jsObjectToJson,
};

export default Utils;
