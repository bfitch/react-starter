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
    params: params,
    data: data
  };
  if(!params) { delete ajaxOptions.params; }
  if(!data)   { delete ajaxOptions.data; }

  return ajaxOptions;
}

function executeAjax(resource, action, options) {
  const cursor  = state.select(resource);
  const request = parseOptions(resource, action, options);

  ajax(request)
    .then((res) => cursor.push(res.data[resource]))
    .catch((res) => cursor.set("errors", res.data.errors));
}

function fetch(resource, options={}) {
  executeAjax(resource, "fetch", options);
}

function save(resource, options={}) {
  executeAjax(resource, "save", options);
}

function destroy(resource, options={}) {
  executeAjax(resource, "delete", options);
}

export {fetch, save, destroy};
