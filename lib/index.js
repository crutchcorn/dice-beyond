(function () {
    'use strict'

    console.log('mock-me-chrome installing...')


const yesResponse = `{
    "setName":"Example",
    "resources": {
        "models": {
            "d4": "/models/d4.gltf",
            "d6": "/models/d6.gltf",
            "d8": "/models/d8.gltf",
            "d10": "/models/d10.gltf",
            "d12": "/models/d12.gltf",
            "d20": "/models/d20.gltf"
        }
    },
    "d4": {
        "modelFile": "d4",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#020202",
                    "numberColor": "#980000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25

                }
            }
        }
    },
    "d6": {
        "modelFile": "d6",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#020202",
                    "numberColor": "#980000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25

                }
            }
        }
    },
    "d8": {
        "modelFile": "d8",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#020202",
                    "numberColor": "#980000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25

                }
            }
        }        
    },
    "d10": {
        "modelFile": "d10",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#020202",
                    "numberColor": "#980000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25

                }
            }
        }
    },
    "d12": {
        "modelFile": "d12",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#020202",
                    "numberColor": "#980000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25

                }
            }
        }      
    },
    "d20": {
        "modelFile": "d20",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#ffffff",
                    "numberColor": "#000000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25
                }
            }
        }
    },
    "d100": {
        "modelFile": "d100",
        "materials": {
            "default": {
                "properties": {
                    "albedoColor": "#020202",
                    "numberColor": "#980000",
                    "numberHighlightColor": "#ff5d3a",
                    "metallic": 0.75,
                    "roughness": 0.25
                }
            }
        }
    }
}`;

    !(function mockXHR () {
        const original = XMLHttpRequest.prototype.open

        XMLHttpRequest.prototype.open = function () {
            const url = arguments[1];
            if (
                url.endsWith('/dice/manifests/default-contrast.json') ||
                url.endsWith('/dice/manifests/default.json')
            ) {
                console.log('mock-me-chrome: xhr open', arguments)
                const originalResponse =  original.apply(this, arguments);
                console.log(this)
                Object.defineProperty(this, "response", {
                    get() { return yesResponse; },
                    set(v) { },
                });
                Object.defineProperty(this, "responseText", {
                    get() { return yesResponse; },
                    set(v) { },
                });
                return originalResponse
            }
            return original.apply(this, arguments)
        }
    })()
})()
