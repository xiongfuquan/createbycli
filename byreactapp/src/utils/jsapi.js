import esriLoader from 'esri-loader'

let configEsriloader = () => { esriLoader.utils.Promise = Promise; }

export function load(modules) {
  configEsriloader();
  return esriLoader.loadModules(modules,{
    url: 'https://js.arcgis.com/4.10/'
  })
}