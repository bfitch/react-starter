import Baobab from "baobab";

export default new Baobab({
  list: ["foot", "nose", "elbow"]
},
{
  syncwrite: true,
  asynchronous: false,
  immutable: true
});

