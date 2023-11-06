import fs from "fs";
import update from "react-addons-update";

let state = {
  order: JSON.parese(fs.readFileSync("./json/data.json", "utf-8")),
};

const updateOrder = update(state.order, {
  receive: {
    $set: "강남구 논현동",
  },
  payment: {
    method: {
      $set: "Mobile",
    },
  },
});
console.log(updateOrder, state.order);
