import poylfill from "babel/polyfill";
import ajax from "axios";
import state from "./state";

const HOST = "http://localhost:8081";
const PREFIX = "api";

function buildUrl(resource, id) {
  let url = `${HOST}/${PREFIX}/${resource}`;
  if (id) { url = `${url}/${id}`; }
  return url;
}

function buildMethod(action, id) {
  const mapping = {
    id: {
      fetch: "get",
      delete: "delete",
      save: "put"
    },
    save: "post",
    fetch: "get"
  };
  return (id ? mapping.id[action] : mapping[action]);
}

function parseOptions(resource, action, options) {
  let {id, params, data} = options;

  let ajaxOptions = {
    url: buildUrl(resource, id),
    method: buildMethod(action, id),
    headers: {"Content-Type": "application/json"},
    params: params,
    data: data
  };
  if(!params) { delete ajaxOptions.params; }
  if(!data)   { delete ajaxOptions.data; }

  return ajaxOptions;
}

function executeAjax(resource, action, cursor, options) {
  const request = parseOptions(resource, action, options);
  const promise = ajax(request).catch((res) => cursor.set("errors", res.data.errors));
  return promise;
}

function fetch(resource, options={}) {
  let {id, params, data} = options;
  const cursor = state.select(resource);
  let dataCursor = cursor.select("data");

  cursor.set("isLoading", true);

  executeAjax(resource, "fetch", cursor, options).then((res) => {
    cursor.set("isLoading", false);

    // this is dumb, don't push a duplicate record into baobab
    dataCursor.set(res.data[resource]);
  });
}

function save(resource, options={}) {
  let {id, params, data} = options;
  const cursor = state.select(resource, "data");

  executeAjax(resource, "save", cursor, options).then((res) =>
    id ? cursor.select({id: id}).merge(res.data) : cursor.push(res.data)
  );
}

function destroy(resource, options={}) {
  let {id, params, data} = options;
  const cursor = state.select(resource, "data");

  executeAjax(resource, "delete", cursor, options).then(() => {
    let resourceArray = cursor.get();
    let index = resourceArray.findIndex(item => item.id === id);
    cursor.splice([index, 1]);
  });
}

export {fetch, save, destroy};
