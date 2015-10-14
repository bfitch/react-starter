import axios from 'axios';

export default function Cachejax(model, config) {
  return {
    get: function(path, params={}, options={}, forceFetch=false) {
      const data = model.get(path);

      if (data && (data.length || Object.keys(data).length) && !forceFetch) {
        console.log(`CACHE hit for: ${path}`);

        return new Promise((resolve, reject) => {
          resolve({data: {[path]: data}});
        });

      } else {
        console.log(`FETCH data for: ${path}`);

        return axios.get(
          (config.endpointMapping[path] || path),
          merge({params: params}, options)
        );
      }
    },

    setAuthorization: function(token) {
      axios.interceptors.request.use(function (axiosConfig) {
        axiosConfig.headers = {'Authorization': `Bearer ${token}`};
        return axiosConfig;
      });
    }
  };

  function merge(obj, objToCopy) {
    Object.keys(objToCopy).forEach((key) => { obj[key] = objToCopy[key] });
    return obj;
  }
}
