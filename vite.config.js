import {defineConfig} from 'vite'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

const path = require('path')

const obfuscatorOptions = {
    //deadCodeInjection: true,
    //deadCodeInjectionThreshold: 0.1,
    //debugProtection: true,
    //debugProtectionInterval: 3000,
    selfDefending: true,
    domainLock: ['127.0.0.1', 'localhost'],
    domainLockRedirectUrl: 'https://discord.gg/cprewritten',
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 0,
    identifierNamesCache: {},
    reservedStrings: ['@'],
    numbersToExpressions: true,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 0.5,
    stringArrayEncoding: ['base64'],
    stringArrayIndexesType: ['hexadecimal-number'],
    stringArrayWrappersCount: 2,
    stringArrayWrappersParametersMaxCount: 4,
    stringArrayWrappersType: 'function',
    ignoreRequireImports: true,
    rotateStringArray: false,
    stringArrayThreshold: 0.9,
    transformObjectKeys: true,
    //sourceMap: true,
    //sourceMapFileName: 'sm'
    //splitStrings: true, // can cause weaker stringArray
}

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    publicDir: "static",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './static')
        },
    },
    plugins: [
        obfuscatorPlugin({
            matchFile: (path) => {
                const isVendor = path.includes('node_modules'); // Not sure how else to exclude modules

                // If you want to exclude some files, you can return false
                // Example: Exclude files ending in foo.js, foo.ts, and foo.tsx
                if(/foo\.(js|tsx?)$/.test(path) || isVendor){
                    console.log(`[Obfuscator] Excluded "${path}"`)
                    return false
                }

                // Customize your includes rules.
                return /\.(js|tsx?|cjs|mjs)$/.test(path)
            },
            options: {
                ...obfuscatorOptions
            },
        }),
        ],
});