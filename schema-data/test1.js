/*
 * @Author: zhangjian
 * @Date: 2021-10-31 15:51:03
 * @LastEditTime: 2021-11-03 16:54:31
 * @LastEditors: zhangjian
 * @Description: test json-schema
 */

import Ajv from "ajv";

const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 10,
      format: "email"
    },
    age: {
      type: "number",
      test: false
    },
    pets: {
      type: "array",
      items: {
        type: "string",
        format: "test"
      }
    },
    like: {
      type: "array",
      items: [
        {
          type: "string"
        },
        {
          type: "number"
        }
      ]
    }
  },
  required: ["name"]
};

// ajv.addFormat('test', {
//   type: 'string',
//   validate: (data) => {
//     return data === 'hahahahahahahaha'
//   }
// })

ajv.addFormat("test", data => {
  console.log("data==", data);
  return data == "haha";
});

ajv.addKeyword("test", {
  validate(data) {
    console.log("wer===", data);
    return data === true;
  },
  macro() {
    return {
      minLength: 10
    };
  }
});

const validate = ajv.compile(schema);

const result = validate({
  name: "qweqweqweqweqwe@xxx.com",
  age: 1234,
  pets: ["haha"],
  like: ["23", 1]
});

if (!result) {
  console.log(validate.errors);
}
