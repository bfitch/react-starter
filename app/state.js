import Baobab from "baobab";

export default new Baobab({
  activeRoute: {},
  list: ["foot", "nose", "elbow"]
},
{
  syncwrite: true,
  asynchronous: false,
  immutable: true
});

